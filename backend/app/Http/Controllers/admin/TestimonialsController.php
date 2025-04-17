<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TestimonialsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $valodator = Validator::make($request->all(), [
            'testimonials' => 'required',
            'citation' => 'required'
        ]);

        if ($valodator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $valodator->errors()
            ]);
        }

        $testimonial = new Testimonial();

        $testimonial->testimonials = $request->testimonials;
        $testimonial->citation = $request->citation;
        $testimonial->designation = $request->designation;
        $testimonial->status = $request->status;
        $testimonial->save();

        //save Temp image
        if ($request->imageId > 0) {

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                // create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/testimonials/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(300, 300);
                $image->save($destPath);

                $testimonial->image = $fileName;
                $testimonial->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Testimonials Added Successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $testimonial = Testimonial::find($id);

        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'testimonial Not Found.'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $testimonial
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);

        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'testimonial Not Found.'
            ]);
        }

        $valodator = Validator::make($request->all(), [
            'testimonials' => 'required',
            'citation' => 'required'
        ]);

        if ($valodator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $valodator->errors()
            ]);
        }

        $testimonial->testimonials = $request->testimonials;
        $testimonial->citation = $request->citation;
        $testimonial->designation = $request->designation;
        $testimonial->status = $request->status;


        $testimonial->save();

        //save Temp image
        if ($request->imageId > 0) {
            $oldImage = $testimonial->image;

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                // create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/testimonials/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(300, 300);
                $image->save($destPath);

                $testimonial->image = $fileName;
                $testimonial->save();
            }

            if ($oldImage != '') {
                File::delete(public_path('uploads/testimonials/' . $oldImage));
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Testimonials Updated Successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimonial = Testimonial::find($id);

        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'testimonial Not Found.'
            ]);
        }

        File::delete(public_path('uploads/testimonials/' . $testimonial->image));

        $testimonial->delete();
        return response()->json([
            'status' => true,
            'message' => 'Testimonials Deleted Successfully.'
        ]);
    }
}

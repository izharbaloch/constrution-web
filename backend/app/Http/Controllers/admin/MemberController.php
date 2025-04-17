<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $members
        ]);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $valodator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required'
        ]);

        if ($valodator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $valodator->errors()
            ]);
        }

        $member = new Member();

        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        //save Temp image
        if ($request->imageId > 0) {

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now') . $member->id . '.' . $ext;

                // create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/members/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $fileName;
                $member->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Member Added Successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $member = Member::find($id);

        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'member Not Found.'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $member = Member::find($id);

        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'member Not Found.'
            ]);
        }

        $valodator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required'
        ]);

        if ($valodator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $valodator->errors()
            ]);
        }

        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();


        //save Temp image
        if ($request->imageId > 0) {
            $oldImage = $member->image;

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now') . $member->id . '.' . $ext;

                // create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/members/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $fileName;
                $member->save();
            }

            if ($oldImage != '') {
                File::delete(public_path('uploads/members/' . $oldImage));
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Member Updated Successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member = Member::find($id);

        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'member Not Found.'
            ]);
        }

        $member->delete();

        File::delete(public_path('uploads/members/' . $member->image));

        $member->delete();
        return response()->json([
            'status' => true,
            'message' => 'Member Deleted Successfully.'
        ]);
    }
}

<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpg,png,jpeg,gif'
        ]);

        if ($validator->fails()) {

            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image'),
            ]);
        }

        $image = $request->image;
        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now') . '.' . $ext;

        // save data in tepm images table
        $model = new TempImage();
        $model->name = $imageName;
        $model->save();

        // save data in tepm images uploads Directry
        $image->move(public_path('uploads/temp'), $imageName);

        // create thumbnail small form in image
        $sourcePath = public_path('uploads/temp/'.$imageName);
        $destPath = public_path('uploads/temp/thumb/'.$imageName);
        $manager = new ImageManager(Driver::class);
        $image = $manager->read($sourcePath);
        $image->coverDown(300, 300);
        $image->save($destPath);



        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => 'image uploaded Successfully.',
        ]);
    }
}

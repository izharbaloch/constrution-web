<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $mailData = [
            'name' =>  $request->name,
            'email' =>  $request->email,
            'phone' =>  $request->phone,
            'subject' =>  $request->subject,
            'message' =>  $request->message,
        ];


        Mail::to('izharbaloch570@gmail.com')->send(new ContactMail($mailData));

        return response()->json([
            'status' => true,
            'message' => 'Thanks For contact us!'
        ]);
    }
}

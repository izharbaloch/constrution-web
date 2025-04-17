<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Container\Attributes\Auth as AttributesAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'  => 'required|email',
            'password'  => 'required'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ]);
        } else {
            $credential = [

                'email' => $request->email,
                'password' => $request->password,

            ];
            if (Auth::attempt($credential)) {

                $user = User::find(auth::user()->id);
                $token = $user->createToken('token')->plainTextToken;
                return response()->json([
                    'status' => true,
                    'token' => $token,
                    'id' => auth::user()->id
                ]);

            } else {

                return response()->json([
                    'status' => false,
                    'error' => 'Either email/password is encorrect'
                ]);

            }
        }
    }


    public function logout(){
        $user = User::find(auth::user()->id);
        $user->tokens()->delete();

        return response()->json([
            'status' => true,
            'error' => 'Logout Successfully'
        ]);
    }
}

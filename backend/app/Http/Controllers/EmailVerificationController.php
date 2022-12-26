<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
    public function sendEmailVerification(Request $request){
        if($request->user()->hasVerifiedEmail()){
            return [
                "message" => "Already Verified"
            ];
        }
        $request->user()->sendEmailVerificationNotification();
        return ['status' => "verification link sent","msg"=>"Check your Email to verify"];
    }

    public function verify(EmailVerificationRequest $request){
        if($request->user()->hasVerifiedEmail()){
            return [
                "message" => "Email Already Verified"
            ];
        }

        if($request->user()->markEmailAsVerified()){
            event(new Verified($request->user()));
        }

        return ['message' => "Email has been verified"];

    }
}

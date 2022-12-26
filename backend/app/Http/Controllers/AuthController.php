<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        if($validator->fails()){
            return response()->json(["status"=>"error","msg"=>"Validation error","errors"=>$validator->errors()]);       
        }

        $validatedData['password'] = bcrypt($request->password);
        $validatedData['name'] = $request->name;
        $validatedData['email'] = $request->email;

        $user = User::create($validatedData);

        event(new Registered($user));

        $createToken = $user->createToken('authToken');
        $accessToken = $createToken->accessToken;
        $token = $createToken->plainTextToken;

        return response(['user' => $user, 'access_token' => $accessToken,"token"=>$token,"token_type"=>"Bearer", "msg"=>"Check your Email to verify"]);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {
            return response(['message' => 'Invalid Credentials']);
        }

        $accessToken = auth()->user()->createToken('authToken')->plainTextToken;

        return response(['user' => auth()->user(), 'access_token' => $accessToken]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response(['message' => 'Successfully logged out']);
    }
}

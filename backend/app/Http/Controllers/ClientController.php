<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $client = Client::all();
        return response()->json([
            "status" => 200,
            "msg"=>"Success",
            "data" => $client
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validData = Validator::make($request->all(),[
            "name" => 'required|unique:clients',
            "email" => 'required|email|unique:clients',
            'phone' => 'required',
            'address' => 'required',
            'pay_type' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $create = Client::create($request->all());
        return response()->json([
            "status" => 200,
            "message" => "Success created",
            "data" => $create
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return response()->json([
            "status" => 200,
            "message" => "Success",
            "data" => $client
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $validData = Validator::make($request->all(),[
            "name" => 'required|unique:clients,name,'.$client->id,
            "email" => 'required|email|unique:clients,email,'.$client->id,
            'phone' => 'required',
            'address' => 'required',
            'pay_type' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $update = Client::find($client->id)->update($request->all());
        $update = Client::find($client->id);
        return response()->json([
            "status" => 200,
            "message" => "Success updated",
            "data" => $update
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        Client::find($client->id)->delete();
        return response()->json([
            "status" => 200,
            "message" => "Success deleted",
            "data" => null
        ]);
    }
}

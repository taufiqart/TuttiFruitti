<?php

namespace App\Http\Controllers;

use App\Models\Cheklists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CheklistsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cheklists = Cheklists::all();
        return response()->json([
            "status" => 200,
            "msg"=>"Success",
            "data" => $cheklists
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
            "todo_id" => 'required',
            "name" => 'required',
            'chek' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $create = Cheklists::create($request->all());
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
    public function show(Cheklists $cheklist)
    {
        return response()->json([
            "status" => 200,
            "message" => "Success",
            "data" => $cheklist
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
    public function update(Request $request, Cheklists $cheklist)
    {
        $validData = Validator::make($request->all(),[
            "name" => 'required',
            'chek' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $update = Cheklists::find($cheklist->id)->update($request->all());
        $update = Cheklists::find($cheklist->id);
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
    public function destroy(Cheklists $cheklist)
    {
        Cheklists::find($cheklist->id)->delete();
        return response()->json([
            "status" => 200,
            "message" => "Success deleted",
            "data" => null
        ]);
    }
}

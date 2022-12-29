<?php

namespace App\Http\Controllers;

use App\Models\CategoryTodo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryTodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categoryTodo = CategoryTodo::all();
        return response()->json([
            "status" => 200,
            "msg"=>"Success",
            "data" => $categoryTodo
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
            "name" => 'required',
            "type" => 'required',
            'project_id' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $create = CategoryTodo::create($request->all());
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
    public function show(CategoryTodo $categorytodo)
    {
        return response()->json([
            "status" => 200,
            "message" => "Success",
            "data" => $categorytodo
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
    public function update(Request $request, CategoryTodo $categorytodo)
    {
        $validData = Validator::make($request->all(),[
            "name" => 'required',
            "type" => 'required',
            'project_id' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $update = CategoryTodo::find($categorytodo->id)->update($request->all());
        $update = CategoryTodo::find($categorytodo->id);
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
    public function destroy(CategoryTodo $categorytodo)
    {
        CategoryTodo::find($categorytodo->id)->delete();
        return response()->json([
            "status" => 200,
            "message" => "Success deleted",
            "data" => null
        ]);
    }
}

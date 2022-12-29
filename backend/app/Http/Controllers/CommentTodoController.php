<?php

namespace App\Http\Controllers;

use App\Models\CommentTodo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentTodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $commentTodo = CommentTodo::all();
        return response()->json([
            "status" => 200,
            "msg"=>"Success",
            "data" => $commentTodo
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
            "user_id" => 'required',
            'comment' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $create = CommentTodo::create($request->all());
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
    public function show(CommentTodo $commenttodo)
    {
        return response()->json([
            "status" => 200,
            "message" => "Success",
            "data" => $commenttodo
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
    public function update(Request $request, CommentTodo $commenttodo)
    {
        $validData = Validator::make($request->all(),[
            "comment" => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $update = CommentTodo::find($commenttodo->id)->update($request->all());
        $update = CommentTodo::find($commenttodo->id);
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
    public function destroy(CommentTodo $commenttodo)
    {
        CommentTodo::find($commenttodo->id)->delete();
        return response()->json([
            "status" => 200,
            "message" => "Success deleted",
            "data" => null
        ]);
    }
}

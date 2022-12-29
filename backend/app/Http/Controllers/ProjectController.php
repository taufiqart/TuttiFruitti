<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project = Project::all();
        return response()->json([
            "status" => 200,
            "msg"=>"Success",
            "data" => $project
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
            'description' => 'required',
            'client_id' => 'required',
            'pay_type' => 'required',
            'status' => 'required',
        ]);

        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $create = Project::create($request->all());
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
    public function show(Project $project)
    {
        return response()->json([
            "status" => 200,
            "message" => "Success",
            "data" => $project
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
    public function update(Request $request, Project $project)
    {
        $validData = Validator::make($request->all(),[
            "name" => 'required',
            'description' => 'required',
            'client_id' => 'required',
            'pay_type' => 'required',
            'status' => 'required',
        ]);


        if($validData->fails()){
            return response()->json([
                "status" => 422,
                "message" => "Validation error",
                "errors" => $validData->errors()
            ]);
        }
        $update = Project::find($project->id)->update($request->all());
        $update = Project::find($project->id);
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
    public function destroy(Project $project)
    {
        Project::find($project->id)->delete();
        return response()->json([
            "status" => 200,
            "message" => "Success deleted",
            "data" => null
        ]);
    }
}

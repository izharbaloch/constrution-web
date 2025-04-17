<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        // this method return all active projects
        $projects = Project::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
    public function latestProjects(Request $request)
    {
        // this method return all latest active projects
        $projects = Project::where('status', 1)
            ->take($request->get('limit'))
            ->orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }

     /**
     * Display the specified resource.
     */
    public function project($id)
    {
        $project = Project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'errors' => 'project Not Found.'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $project,
        ]);
    }
}

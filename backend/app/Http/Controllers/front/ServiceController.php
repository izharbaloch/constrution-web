<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        // this method return all active services
        $services = Service::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }
    public function latestServices(Request $request)
    {
        // this method return all latest active services
        $services = Service::where('status', 1)
            ->take($request->get('limit'))
            ->orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function service($id)
    {
        $service = Service::find($id);

        if ($service == null) {
            return response()->json([
                'status' => false,
                'errors' => 'Service Not Found.'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $service,
        ]);
    }
}

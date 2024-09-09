<?php

namespace App\Http\Controllers;

use App\Models\Universite;
use Illuminate\Http\Request;

class UniversiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function __construct()
     {
         $this->middleware("guest");
     }
    public function index()
    {

        // [
        //     'user'=>$user
        // ];
        return Response()->json(['user' => "cool",'redirect' => '/']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Display the specified resource.
     */
    public function show(Universite $universite)
    {
        //

        return response()->json([$universite]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Universite $universite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Universite $universite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Universite $universite)
    {
        //
    }

    public function universiteById($id)
    {
        ['id' => $id];
        return response()->json([Universite::find($id)]);
    }
}

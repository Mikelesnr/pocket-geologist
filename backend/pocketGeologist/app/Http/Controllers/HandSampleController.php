<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HandSample;

class HandSampleController extends Controller
{
    //Adds mineral to database
    function addMineral(Request $req)
    {
        $handSample = new HandSample;
        $handSample->mineral = $req->input('name');
        $handSample->color = $req->input('color');
        $handSample->streak = $req->input('streak');
        $handSample->luster = $req->input('luster');
        $handSample->hardness = $req->input('hardness');
        $handSample->transparency = $req->input('transparency');
        $handSample->op = $req->input('op');
        $handSample->sg = $req->input('sg');
        $handSample->fracture = $req->input('fracture');
        $handSample->habit = $req->input('habit');
        $handSample->description = $req->input('description');
        $handSample->image_path = $req->file('file')->store('images');
        $handSample->save();
        return $handSample;
    }
}

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
        $handSample->group = $req->input('group');
        $handSample->fracture = $req->input('fracture');
        $handSample->habit = $req->input('habit');
        $handSample->description = $req->input('description');
        $handSample->image_path = $req->file('file')->store('images');
        $handSample->save();
        return $handSample;
    }

    //Updates mineral in database
    function updateMineral(Request $req)
    {
        $handSample = HandSample::find($req->input('id'));
        $handSample->mineral = $req->input('name');
        $handSample->color = $req->input('color');
        $handSample->streak = $req->input('streak');
        $handSample->luster = $req->input('luster');
        $handSample->hardness = $req->input('hardness');
        $handSample->transparency = $req->input('transparency');
        $handSample->op = $req->input('op');
        $handSample->sg = $req->input('sg');
        $handSample->group = $req->input('group');
        $handSample->fracture = $req->input('fracture');
        $handSample->habit = $req->input('habit');
        $handSample->description = $req->input('description');
        $handSample->image_path = $req->file('file')->store('images');
        $handSample->save();
        return $handSample;
    }

    //returns all minerals in the database
    function displayAll()
    {
        return HandSample::all();
    }

    //takes in mineral name and removes it from database
    function delete($name)
    {
        $result = HandSample::where('mineral', $name)->delete();
        if ($result) {
            return ["result" => "Handsample has been deleted"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    //takes in mineral name and returns the mineral properties
    function displayOne($name)
    {
        $result = HandSample::all();
        for ($i = 0; $i < count($result); $i++) {
            if ($result[$i]->mineral == $name) {
                return $result[$i];
            } else {
                continue;
            }
        }
    }

    //returns mineral based on a keyword
    function search($key)
    {
        $data = [];
        $name = HandSample::where('mineral', 'Like', "%$key%")->get();
        $group = HandSample::where('group', 'Like', "%$key%")->get();
        for ($i = 0; $i < count($name); $i++) {
            array_push($data, $name[$i]);
        }
        for ($i = 0; $i < count($group); $i++) {
            if (in_array($group[$i], $data)) {
                continue;
            } else {
                array_push($data, $group[$i]);
            }
        }
        return $data;
    }

    //returns minerals in a single group
    function displayGroup($groupName)
    {
        $group = HandSample::where('group', 'Like', "%$groupName%")->get();
        return $group;
    }
}
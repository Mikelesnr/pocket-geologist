<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends Controller
{
    ///returns all tests in the database
    function displayTests()
    {
        return Test::all();
    }

    //takes in mineral name and returns the mineral properties
    function displayTest($title)
    {
        $result = Test::all();
        for ($i = 0; $i < count($result); $i++) {
            if ($result[$i]->title == $title) {
                return $result[$i];
            } else {
                continue;
            }
        }
    }
}
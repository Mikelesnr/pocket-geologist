<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    //Registration function, addds user to database
    function register(Request $req)
    {
        $user = new User;
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    //Login function, Checks if user is in database and allows access
    function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ['error' => "Email or password incorrect"];
        }
        return $user;
    }

    //gets weather from openweathermap
    function weather($city)
    {
        $response = $city ? Http::get('https://api.openweathermap.org/data/2.5/weather?q=' . $city . '&appid=8bc66f0012a8b260072157ed4c04b2b4&units=metric') :
            Http::get('https://api.openweathermap.org/data/2.5/weather?q=harare&appid=8bc66f0012a8b260072157ed4c04b2b4&units=metric');
        if ($response->json()["cod"] == "200") {
            return $response->json();
        } else {
            $response
                = Http::get('https://api.openweathermap.org/data/2.5/weather?q=harare&appid=8bc66f0012a8b260072157ed4c04b2b4&units=metric');
            return $response->json();
        }
    }
}
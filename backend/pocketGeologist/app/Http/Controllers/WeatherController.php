<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    ///gets weather from openweathermap
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
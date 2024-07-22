<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HandSampleController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\WeatherController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);

Route::post('login', [UserController::class, 'login']);

Route::post('addMineral', [HandSampleController::class, 'addMineral']);

Route::get('displayAll', [HandSampleController::class, 'displayAll']);

Route::delete('delete/{name}', [HandSampleController::class, 'delete']);

Route::get('displayOne/{name}', [HandSampleController::class, 'displayOne']);

Route::post('updateMineral', [HandSampleController::class, 'updateMineral']);

Route::get('search/{key}', [HandSampleController::class, 'search']);

Route::get('displayGroup/{groupName}', [HandSampleController::class, 'displayGroup']);

Route::get('weather/{city}', [WeatherController::class, 'weather']);

Route::get('propertySearch', [HandSampleController::class, 'propertySearch']);

Route::get('displayTests', [TestController::class, 'displayTests']);

Route::get('displayTest/{title}', [TestController::class, 'displayTest']);
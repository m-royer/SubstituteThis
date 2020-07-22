<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::get('/', 'AdminController@index');
});

// The one page
Route::get('/{any}', 'SPAController@index')->where('any','.*');
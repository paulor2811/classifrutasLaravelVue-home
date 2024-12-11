<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;


Route::get('/hello', function () {
    return ['message' => 'Hello, World!'];
});

Route::get('/log-test', function () {
    return ['message' => 'Log Teste!'];
});

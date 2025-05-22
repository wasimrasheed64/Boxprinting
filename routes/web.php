<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/shop', function () {
    return Inertia::render('shop');
})->name('shop');

Route::get('/wishlist', function () {
    return Inertia::render('wishlist');
})->name('wishlist');

Route::get('/cart', function () {
    return Inertia::render('cart');
})->name('cart');

Route::get('/checkout', function () {
    return Inertia::render('checkout');
})->name('checkout');

Route::get('/account', function () {
    return Inertia::render('account');
})->name('account');

Route::get('/register', function () {
    return Inertia::render('register');
})->name('register');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/404', function () {
    return Inertia::render('404');
})->name('404');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

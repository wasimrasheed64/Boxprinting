<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $banner = \App\Models\Banner::all();
    $homePage = \App\Models\HomePage::first();
    $products = App\Models\Product::select('id','name as title','slug','image_1 as img',
        'image_2 as thumb_img','short_description')->where('is_featured',1)->get();
    $promotions = \App\Models\Promotion::where('page',1)->get();
    $blogs = \App\Models\Blog::select('id','title','slug','image','short_description')
        ->orderBy('created_at', 'desc')->take(3)->get();
    $faqs = \App\Models\Faq::select('id','question','answer')->get();

    return Inertia::render('index', [
        'banners' => $banner,
        'homePage' => $homePage,
        'products' => $products,
        'promotions' => $promotions,
        'blogs' => $blogs,
        'faqs' => $faqs,
    ]);
})->name('home');

Route::get('/{slug}', function () {
    $mainCategory = \App\Models\MainCategory::with('category')->where('slug', request()->slug)->first();
    if (!is_null($mainCategory)) {
        $category = $mainCategory->category;
        return Inertia::render('mainCategory', [
            'mainCategory' => $mainCategory,
            'categories' => $category,
        ]);
    }
    else{
        $category = \App\Models\Category::where('slug', request()->slug)->first();
        if($category){
            $products = \App\Models\Product::where('category_id', $category->id)
                ->select('id','name as title','slug','image_1 as img',
                    'image_2 as thumb_img','short_description')->get();
            return Inertia::render('category', [
                'category' => $category,
                'products' => $products,
                ]);

        }else {
            $product = \App\Models\Product::where('slug', request()->slug)->first();
            if($product){
                $promotions = \App\Models\Promotion::where('page',3)->get();
                $blogs = \App\Models\Blog::select('id','title','slug','image','short_description')
                    ->orderBy('created_at', 'desc')->take(3)->get();
                $faqs = \App\Models\Faq::select('id','question','answer')->limit(5)->get();
                $relatedProducts = \App\Models\Product::where('category_id', $product->category_id)
                    ->where('id', '!=', $product->id)
                    ->select('id','name as title','slug','image_1 as img',
                        'image_2 as thumb_img','short_description')->limit(4)->get();
                return Inertia::render('product-details/index', [
                    'product' => $product,
                    'promotions' => $promotions,
                    'blogs' => $blogs,
                    'faqs' => $faqs,
                    'relatedProducts' => $relatedProducts,
                ]);
            }
        }
    }

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

Route::get('/blog-details', function () {
    return Inertia::render('blog-details/index');
})->name('blog-details');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/shop', function () {
    return Inertia::render('shop');
})->name('shop');

Route::get('/product-details', function () {
    return Inertia::render('product-details/index');
})->name('product-details');

//require __DIR__.'/settings.php';
require __DIR__.'/admin.php';
//require __DIR__.'/auth.php';


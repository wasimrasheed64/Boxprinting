@extends('frontend.layouts.master')

@section('title', $homePage->seo_title)
{{--@section('keywords', $homepage->seo_keyword)--}}
@section('description', $homePage->seo_description)

@section('content')
    <!-- Banner -->
    @include('partials.frontend.banner',[
    'banners' => $banners
    ])

    @include('partials.frontend.services-block')
    <!-- Main Category -->



    <!-- company intro -->
    <section class="mt-10 pb-1">
        <div class="container">
            {!!  $homePage->company_intro !!}
        </div>
    </section>

    <!-- Services -->




    <!-- Product list -->
    @include('partials.frontend.productlist',[
        'products' => $featuredProducts,
    ])

    <section class="pt-6 mt-10">
                    <div class="container">
                        <h2 class="title title-simple">Popular Categories</h2>
                        <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-xs-2 cols-1" data-owl-options="{
                            'nav': false,
                            'dots': true,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 1
                                },
                                '480': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4,
                                    'dots': false
                                }
                            }
                        }">
                        @foreach(\App\Models\Category::withCount('products')->where('is_footer', '1')->limit(4)->get() as $category)
    <div class="category category-absolute category-classic">
        <a href="{{ route('dynamic.page', $category->slug) }}">
            <figure class="category-media">
                <img src="{{ asset($category->banner_image) }}" alt="{{ $category->name }}" width="280" height="280" />
            </figure>
            <div class="category-content">
                <h4 class="category-name">{{ $category->name }}</h4>
                <span class="category-count">{{ $category->products_count }}</span>
            </div>
        </a>
    </div>
@endforeach

                    </div>
                </section>

    @include('partials.frontend.promotionBanner')



    @include('partials.frontend.productlist',[
       'products' => $productSlider,
        'title'  => "Box By Style"
   ])



    <div class="container">
    <!-- End of Product Section -->
        @include('partials.frontend.testimonials',[
            'testimonials' => $testimonials
            ])

    </div>
    @include('partials.frontend.intro',[
    'description' => $homePage->description
])
    @include('partials.frontend.services',[
     'services' => $services,
     'description' => $homePage->description,
 ])

    @include('partials.frontend.blog')


@endsection

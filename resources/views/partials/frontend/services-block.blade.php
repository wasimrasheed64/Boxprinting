<section class="pb-8 mt-10 service-list-section p-relative overflow-hidden">
    <div class="container">
        <div class="service-list service-list-lg appear-animate">
            <div class="container">
{{--                <h1 style="text-align: center;"><span style="color: #000000">What we offer</span></h1>--}}
            </div>
            <div class="owl-carousel owl-theme show-shadow" data-owl-options="{
                                'margin':20,
                                'nav':false,
                                'dots':false,
                                'autoplay': true,
                                'autoplayTimeout': 4000,
                                'responsive':{
                                    '992':{
                                        'items':3
                                    },
                                    '768':{
                                        'items':2
                                    },
                                    '576':{
                                        'items':2
                                    },
                                    '0':{
                                        'items':1
                                    },
                                    '1200':{
                                        'items':4
                                    }
                                }
                            }">
@foreach(\App\Models\Service::all() as $item)
                <div class="icon-box icon-box-side icon-box-side-1 flex-column appear-animate"
                     data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.2s'
                                }">
                    <!-- <i class="icon-box-icon d-icon-truck mr-0" style="font-size: 5rem;"></i> -->
                     <img src="{{$item->image}}" alt="service_{{$loop->iteration}}" style="width:50%">
                    <div class="icon-box-content mb-1 text-center">
                        <h4 class="icon-box-title mb-1 text-normal">{{ $item->heading }}</h4>
                        <p class="font-primary text-grey">{{ $item->description}}</p>
                    </div>
                </div>
               @endforeach
            </div>
        </div>

    </div>
</section>

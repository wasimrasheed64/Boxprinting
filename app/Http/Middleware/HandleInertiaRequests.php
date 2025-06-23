<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\FooterLink;
use App\Models\MainCategory;
use App\Models\SiteSetting;
use App\Models\SocialLink;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'siteSettings' => fn () => SiteSetting::first(),
            'footerCategories' => fn () => Category::select('id','name','slug')->where('is_footer', true)->limit(7)->get(),
            'socialLinks' => fn () => SocialLink::get() ?? [],
            'mainCategories' => fn () => MainCategory::select('id', 'name', 'slug','image')
                ->with(['categories' => function ($query) {
                    $query->select('id', 'name', 'slug', 'main_category_id','banner_image',
                        'category_image');
                }])
                ->get(),
            'topBlogs' => fn () => \App\Models\Blog::latest()->take(3)->get(),
            'footerLinks' => FooterLink::all(),
        ];
    }
}

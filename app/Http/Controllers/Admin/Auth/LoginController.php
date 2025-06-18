<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Middleware\RedirectIfAuthenticated;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\JsonResponse;
use function Pest\Laravel\json;

class LoginController extends Controller
{


    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }

    protected function guard()
    {
        return Auth::guard('admin');
    }

    protected function broker()
    {
        return Password::broker('admin');
    }

    function redirectPath()
    {
        return route('admin.dashboard');
    }

    public function showLoginForm()
    {
        return view("admin.auth.login");
    }


    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

//        $user = Admin::where('email', $request->email)->first();
//        return Hash::check($request->password,$user->password) ? 'working' : 'not working';
//        return response()->json($user);
        if ($this->guard()->attempt($this->credentials($request), $request->filled('remember'))) {
//            return 'working';
            return redirect()->intended('admin.dashboard');
        }
        return back()->withInput($request->only('email', 'remember'))->withErrors([
            'email' => 'These credentials do not match our records.',
        ]);
    }

    protected function credentials(Request $request)
    {
        return $request->only('email', 'password');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */


    function logout(Request $request)
    {
        $this->guard()->logout();
        if ($response = $this->loggedOut($request)) {
            return $response;
        }

        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect()->route('admin.login');
    }

}

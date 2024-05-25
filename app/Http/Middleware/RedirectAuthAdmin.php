<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RedirectAuthAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // if (Auth::guard('admin')->user()) {
        //     return $next($request);
        // }
        // if ($request->ajax() || $request->wantsJson()) {
        //     return response('Unauthorized.', 401);
        // } else {
        //     return redirect(route('adminLogin'));
        // }

        // dd(Auth::guard('admin')->check());

        if(Auth::guard('admin')->check()){
            return redirect(route('adminDashboard'));
        }

        return $next($request);
    }
}

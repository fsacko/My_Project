<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,$userType): Response
    {
        if(auth()->user()->type == $userType){
            return $next($request);
        }
        else{
            // Auth::guard('web')->logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return redirect('/')->withErrors(['error'=>"Desolé vous n'etes pas administrateur!"]);
        }
        // return response()->json(['message' => "Vous n'etes pas Authorisés à acceder a cette page" ], 401);
        // return redirect()->route('homePage');
    }
}

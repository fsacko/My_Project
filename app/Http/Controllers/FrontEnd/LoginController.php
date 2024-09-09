<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Http\Requests\FrontEnd\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credencials = $request->validated();
        if(Auth::attempt($credencials))
        {
            $userType = auth()->user()->type;

            // return Response()->json(['error' => $userType,'redirect'=>'/login']);
            if($userType == 'admin'){
                // $user = Auth::user();
                // $token = $user->createToken('auth')->plainTextToken;
                return Response()->json(['error' => "Desolé vous n'etes pas administrateur!! Vous devez avoir les droits necessaire!! ",'redirect'=>'/login']);

            }
            elseif($userType == 'adminUniversite'){
                if ($request->role != 'admin') {
                    return Response()->json(['error' => "Le role Incorrect",'redirect'=>'/login']);
                }
                $user = Auth::user();


                $user = Auth::user();
                $token = $user->createToken('authToken')->plainTextToken;

                return response()->json([
                    'user' => $user,
                    'access_token' => $token,
                    'token_type' => 'Bearer','redirect' => '/'
                ]);
                // $request->session()->regenerate();
                // return Response()->json(['user' => $user,'redirect' => '/']);

            }
            elseif($userType == 'etudiant'){
                if ($request->role != 'etudiant') {
                    return Response()->json(['error' => "Le role Incorrect",'redirect'=>'/login']);
                }
                $user = Auth::user();
                $token = $user->createToken('authToken')->plainTextToken;

                // $request->session()->regenerate();
                return Response()->json([
                    'user' => $user,
                    'access_token' => $token,'redirect' => '/etudiant']);

            }

        }
        return Response()->json(['error' => "Mot de passe ou Email invalide",'redirect'=>'/login']);
    }
}

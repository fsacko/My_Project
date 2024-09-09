@extends('layouts.app')
@section('content')
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        {{ __("A l' Université ") }}
                        <div class="navbar-collapse">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('universite.liste') }}">{{ __('Accueil') }}</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('universite.insert') }}">{{ __('Nouvelle Université') }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card-body">
                        @yield('univeContent')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

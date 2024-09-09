@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        @if (session('success'))
            <div class="alert alert-success" role="alert">
                {{ session('success') }}
            </div>
        @endif
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Espace Administrateur') }}</div>
                
                <div class="card-body">
                    @yield('administrateur')
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
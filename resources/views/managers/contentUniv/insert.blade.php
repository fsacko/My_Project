@extends('managers.universite')
@section('univeContent')

    <form method="POST" action="{{ route('universite.insertU') }}">
        @csrf

        <div class="row mb-3">
            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Nom') }}</label>

            <div class="col-md-6">
                <input id="name" type="text" class="form-control @error('nom') is-invalid @enderror" name="nom" value="{{ old('nom') }}" required autocomplete="nom" autofocus>

                @error('nom')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="status" class="col-md-4 col-form-label text-md-end">{{ __('Statut  ') }}</label>

            <div class="col-md-6">
                <input id="status" type="text" class="form-control @error('status') is-invalid @enderror" name="status" value="{{ old('status') }}" required autocomplete="status" placeholder="Privée Ou Public">

                @error('status')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="adresse" class="col-md-4 col-form-label text-md-end">{{ __('Adresse') }}</label>

            <div class="col-md-6">
                <input id="adresse" type="text" class="form-control @error('adresse') is-invalid @enderror" name="adresse" required autocomplete="new-adresse" placeholder="Mali/Bamako">

                @error('adresse')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="descriptions-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Descriptions') }}</label>

            <div class="col-md-6">
                <textarea id="descriptions" class="form-text" name="descriptions" ></textarea>
            </div>
        </div>

        <div class="row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    {{ __('Enregistrer') }}
                </button>
            </div>
        </div>
    </form>
@endsection

@extends('layouts.app')
@section('content')
    <div class="container">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('Accueil') }}</div>

                    <div class="card-body">
                        {{-- {{ _("Accueil de la page de gestion des universites")}} --}}



                        <div class=" container-fluid justify-content-center row">
                            @foreach($universite as $univ)
                                @php
                                    $id = $univ->id;
                                @endphp

                            <div class="card col-sm-12 col-lg-3 m-3 shadow-lg">
                                <div class="card-title p-lg-1" >
                                    {{ $univ->nom }}
                                </div>
                                <div class="card-body">
                                    {{-- {{ $univ->descriptions }} --}}
                                    @if($univ->filieres != null)
                                        Cette Université contient <<<strong>{{$univ->filieres_count}}</strong>>> Filiere(s) <br>
                                    @else
                                        Cette Université ne contient pas de Filiere pour l'instant <br>
                                    @endif

                                    @if($univ->etudiants($id) != null)
                                        Avec comme nombre d'etudiant <<<strong>{{$univ->etudiants($id)->count()}}</strong>>>
                                    @else
                                        Avec <<<strong>0</strong>>> etudiant Enregistré pour l'instant.
                                    @endif
                                </div>
                                <div class="card-footer text-center">
                                    <strong>Statut : </strong>
                                    {{$univ->status }}
                                    {{-- <a class="btn btn-primary" (click)="listeModule(classe.id )" routerLink="/etudiant/Classe/Module">
                                    Voir Modules
                                    </a> --}}
                                </div>
                            </div>

                            @endforeach
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

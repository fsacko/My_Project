@extends('managers.universite')
@section('univeContent')

        @if (session('succces'))
            <div class="alert alert-success" role="alert">
                {{ session('succces') }}
            </div>
        @endif



        <table  class="table table-striped-columns border-1">
            <thead>
                <tr>
                <th scope="col">Nom</th><th scope="col">Statut</th><th scope="col">Description</th><th scope="col" colspan="2">Editer Admin</th><th scope="col" colspan="2">Editer Université</th>
                </tr>
            </thead>
            <tbody >
            @foreach ($universite as $univ)
                <tr style="font-size: small;">
                    <td>{{$univ->nom}}</td>
                    <td>{{$univ->status}}</td>
                    <td>{{$univ->descriptions}}</td>
                    <td><a href="{{ route('administration.list',['id'=>$univ->id]) }}" style="font-size: xx-small" class="btn btn-info">Voir Admin</a></td>
                    <td><a href="{{ route('administration.insert',['id'=>$univ->id]) }}" style="font-size: xx-small" class="btn btn-success">Ajoute Admin</a></td>
                    <td><a href="{{ route('universite.update',['id'=>$univ->id]) }}" style="font-size: xx-small" class="btn btn-warning">Modifier</a></td>
                    <td><a href="{{ route('universite.delete',['id'=>$univ->id]) }}" style="font-size: xx-small" class="btn btn-danger">Supprimer</a></td>
                </tr>
            @endforeach
            </tbody>
            <tfoot class="bg-body-tertiary">
            </tfoot>
        </table>


@endsection

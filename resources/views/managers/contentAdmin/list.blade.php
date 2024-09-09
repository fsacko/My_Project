@extends('managers.administrateur')
@section('administrateur')
    <table  class="table table-striped-columns border-1">
        <thead>
            <tr>
            <th scope="col">Nom</th><th scope="col">Email</th><th scope="col">Nom de l'Uiversité</th><th scope="col" colspan="2">Editer</th>
            </tr>
        </thead>
        <tbody >
        @foreach ($users as $user)
            <tr style="font-size: small;">
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$universite->nom}}</td>
                <td><a href="{{ route('administration.update',['id'=>$user->id]) }}" class="btn btn-warning text-small">Modifier</a></td>
                <td><a href="{{ route('administration.delete',['id'=>$user->id]) }}" class="btn btn-danger text-small">Supprimer</a></td>
            </tr>
        @endforeach
        </tbody>
        <tfoot class="bg-body-tertiary">
        </tfoot>
    </table>
@endsection

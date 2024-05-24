import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent {
renseigner() {
  alert(
    "Veuillez Remplir les champs ci-dessous pour obtenir un Resultat "
  )
}

}

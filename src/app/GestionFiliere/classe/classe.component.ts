import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent implements OnInit {

  classeData: any|Array<any>;
  moduleData: any|Array<any>;
  classeForm!:FormGroup;


  classeModule: any|Array<any>; // Tableau qui va prendre les modules en fonction du changement de classe
  erreur: any;


  constructor(private data:DataService,private route:Router,private formB:FormBuilder){}
  ngOnInit(): void {
    this.data.getClasseData().subscribe(data =>{
      this.classeData = data; //Pour la liste des classes qui sont dans l'Université en question.
    });
    this.data.showClasse().subscribe(data => {
      this.moduleData = data; //Pour la liste des classes et leurs modules qui sont dans l'Université en question
    });

    // Pour le formulaire de renseignement pour avoir accès à la page des cours
    this.classeForm = this.formB.group({
      filiere_id:this.formB.control('',Validators.required),
      module_id:this.formB.control('',Validators.required)
    });


  }

  renseigner() {
    this.route.navigate(['/gestion']); //Pour la redirection
  }

  validation(){
    if (this.classeForm.value.filiere_id != 0 && this.classeForm.value.module_id != 0) {
      
      console.log(this.classeForm.value);
      this.erreur = false;
      this.data.module_id = this.classeForm.value.module_id;
      this.data.filiere_id = this.classeForm.value.filiere_id;
      // this.data.getCourData(this.classeForm.value.filiere_id, this.classeForm.value.module_id).subscribe(data =>{
      //   this.route.navigate(['filiere/Cours']);
      // });
      this.data.moduleData = this.classeModule;
      this.route.navigate(['gestion/Cours'])
    }
    else{
      // console.log(this.classeForm.errors);
      this.erreur = {'err':"Erreur!!! Veillez Bien renseigner le formulaire"};
      // console.log(this.erreur)
      this.route.navigate(['/gestion'])
    }
    
  }

  OnClasseChange(){
    // this.listeModules();
    let selectedClass = this.classeForm.value.filiere_id;
    for(let i = 0; i < this.moduleData.length; i++) {
      var data = this.moduleData[i];
      for(let j =0; j < data.length; j++) {
        var data2 = data[j];
        if (data2.id == selectedClass) {

          this.classeModule = [data2];
          // console.log(this.classeModule);

        }
      }
    }

  }

}

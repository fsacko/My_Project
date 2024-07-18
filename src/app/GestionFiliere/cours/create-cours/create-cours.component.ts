import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Cours } from '../../../model/Cours.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrl: './create-cours.component.css'
})
export class CreateCoursComponent implements OnInit {

  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  selectedFile!: File ;
  uploadProgress: number | null = null;
  contenu: string = "";
  sous_titre: string = "";
  titre: string = "";

  constructor(private data: DataService,private route:Router) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  cours = new Cours;


  ngOnInit():void
  {
    // this.model;
    // this.coursFormGroup = this.formB.group({
    //   fichier:
    // });
    console.log(this.data.module_id);
    console.log(this.data.filiere_id);
  }

  saveCours():void
  {
    if (this.selectedFile && this.titre && this.sous_titre && this.contenu) {
      const filiere_id = this.data.filiere_id;
      const module_id = this.data.module_id;
      console.log(filiere_id);
      console.log(module_id);

      this.data.insertcour(this.selectedFile,this.titre,this.sous_titre,this.contenu,filiere_id,module_id).subscribe(event => {
        if (typeof event === 'object' && event.status === 'progress') {
          this.uploadProgress = event.message;
        }
        if (event.success) {
          console.log('File uploaded successfully', event);
        }
        this.route.navigateByUrl('gestion/Cours/liste');
      });
    }
    else{
      console.log("Fichier non prise en compte!!!!");
    }
  }
}

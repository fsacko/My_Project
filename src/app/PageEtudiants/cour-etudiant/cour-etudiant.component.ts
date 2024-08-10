import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cour-etudiant',
  templateUrl: './cour-etudiant.component.html',
  styleUrl: './cour-etudiant.component.css'
})
export class CourEtudiantComponent implements OnInit{
  cours: any;
  modules: any;
  nom: any;

  constructor(private data:EtudiantDataService, public xss:DomSanitizer,public spinner: NgxSpinnerService){  }

  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    if (this.data.moduleID != 0 ) {
      var id = this.data.moduleID;

      this.data.getEtudiantCoursBy(id).subscribe(res =>{
        this.cours = res;
        console.log(this.cours);
        for (let i = 0; i < this.cours.length; i++) {
          var el = this.cours[i];
          this.nom = el.nom;
          break;
        }
      });
      console.log(id);
      this.data.moduleID = 0;
    }
    else{
      this.data.getEtudiantCours().subscribe(res => {
        this.cours = res;
        console.log(res);
      });
    }

  }

  getFileType(filePath: string): string {
    const fileExtension = filePath.split('.').pop();
    switch (fileExtension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
        return 'image';
      case 'mp4':
      case 'webm':
      case 'ogg':
        return 'video';
      case 'mp3':
      case 'wav':
        return 'audio';
      case 'pdf':
      case 'pdfs':
        return 'pdf';
      default:
        return 'other';
    }
  }

}

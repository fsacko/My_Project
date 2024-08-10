import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrl: './liste-cours.component.css'
})
export class ListeCoursComponent implements OnInit {

  cours: any[] = [];


  constructor(private data:DataService, public xss:DomSanitizer,public spinner: NgxSpinnerService){};

    ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.data.getCourData(this.data.filiere_id,this.data.module_id).subscribe(res =>{
        this.cours = res;
      });

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

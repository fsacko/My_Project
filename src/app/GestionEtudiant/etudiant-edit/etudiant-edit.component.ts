import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrl: './etudiant-edit.component.css'
})
export class EtudiantEditComponent implements OnInit {
  etudiants = new Etudiants;
  listeFiliere:any | Array<any>;
  universites: any;
  errors:any|Array<any>;
  annee:any | Array<any>;

  constructor(private data:DataService,private route:Router,public spinner: NgxSpinnerService){}

  public Editor = ClassicEditor;
  public config = {
      toolbar: [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'forms', groups: [ 'forms' ] },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        '/',
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'about' ] }],
      plugins: [
          Bold, Essentials, Italic, Mention, Paragraph, Undo
      ],
      licenseKey: '<YOUR_LICENSE_KEY>',
      // mention: {
      //     Mention configuration
      // }
  }
  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show(

    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.data.getClasseData().subscribe(data =>{
      this.listeFiliere = data;
    });
    this.etudiants.universite_id = this.data.users.universite_id;
    this.annee = this.data.annee_scolaire;
  }


  insertEtudiant(){
    console.log(this.etudiants);
    this.data.insertEtudiantData(this.etudiants).subscribe(res=>{
      const redirect = res.redirect;
      if(res.success){
        this.data.session_success = res.success;
        this.route.navigate([redirect]);
      }
      else{
        this.errors = res.error;
      }
    });

    // console.log(this.etudiant);
  }

}


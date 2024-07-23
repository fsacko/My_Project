import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import {  Router } from '@angular/router';

import { EtudiantDetailComponent } from '../etudiant-detail/etudiant-detail.component';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { Idrecuper } from '../etudiant-detail/IDrecuper';
import { Config } from 'datatables.net';
import { link } from 'fs';



@Component({
  selector: 'app-etudiant-filiere',
  templateUrl: './etudiant-filiere.component.html',
  styleUrl: './etudiant-filiere.component.css'
})
export class EtudiantFiliereComponent implements OnInit {
  Etudiants: any | Array <any>;
  IdEtudiant:any;
  etudiantForm = new Etudiants;

  dataEtudiant!:Array<any>;
  // dtOptions: Config = {};


  constructor (private dataS:DataService, private route : Router){  }



  dtOptions: ADTSettings = {};
  data: any[] = [];
  dtTrigger: Subject<ADTSettings> = new Subject<ADTSettings>();

  @ViewChild('demoNg')
  demoNg!: TemplateRef<EtudiantDetailComponent>;
  ngOnInit(): void {

    this.dataS.getEtudiantData().subscribe(res =>{
      this.dataS.dataEtudiants = res;
      this.data = this.dataS.dataEtudiants ;
      console.log(this.data)
    });

      const self =this;

      this.dtOptions = {
        processing: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log('DataTables Parameters:', dataTablesParameters);
          this.dataS.getEtudiantData().subscribe(resp => {
            console.log('API Response:', resp);
            callback({
              recordsTotal: resp.length,
              recordsFiltered: resp.length,
              data: resp
            });
          }, error => {
            console.error('API Error:', error);
          });
        },
        columns:[
          {
            title:'Nom',
            data:'nom'
          },
          {
            title:'Prenom',
            data:'prenom'
          },
          {
            title:'Telephone',
            data:'telephone'
          },
          {
            title:'Email',
            data:'email'
          },
          {
            title:'Filiere',
            data:'sigle'
          },
          {
            title: 'Actions',
            data: null,
            defaultContent: '',
            orderable: false,
            render: (data, type, row) => {
              return `
                <style>
                  .edit-btn {
                    background-color: #4CAF50; /* Green */
                    border: none;
                    color: white;
                    padding: 5px 10px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 14px;
                    margin: 2px 1px;
                    cursor: pointer;
                    border-radius: 4px;
                  }

                  .delete-btn {
                    background-color: #f44336; /* Red */
                    border: none;
                    color: white;
                    padding: 5px 10px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 14px;
                    margin: 2px 1px;
                    cursor: pointer;
                    border-radius: 4px;
                  }
                </style>
                <button class="edit-btn" data-id="${data.id}"  style="font-size: x-small;"  data-bs-toggle="modal" data-bs-target="#modifier">Edit</button>
                <button class="delete-btn" data-id="${row.id}"   style="font-size: x-small;" data-bs-toggle="modal" data-bs-target="#supprimer">Delete</button>

              `;
            }
          }
        ]
      };


    console.log(this.dataS.dataEtudiants);

  }

    // Add event listeners for edit and delete buttons
    addRowEventListeners() {
      $('#tableEtudiant tbody').on('click', 'button.edit-btn', (event) => {
        const id = $(event.currentTarget).data('id');
        this.editRow(id);
      });

      $('#tableEtudiant tbody').on('click', 'button.delete-btn', (event) => {
        const id = $(event.currentTarget).data('id');
        this.deleteRow(id);
      });
    }

    editRow(id: number): void {
      console.log('Edit row with ID:', id);
      // Implement edit functionality here
    }

    deleteRow(id: number): void {
      console.log('Delete row with ID:', id);
      // Implement delete functionality here
    }


  ngAfterViewInit() {
    setTimeout(() => {
      // race condition fails unit tests if dtOptions isn't sent with dtTrigger
      this.dtTrigger.next(this.dtOptions);
    }, 200);
  }


  onCaptureEvent(event: Idrecuper) {
    console.log( `Event '${event.cmd}' with data '${JSON.stringify(event.data)}`);
  }

// Afficher la liste des etudiants :

  // Recuperer l'ID d'un Etudiant en particulier :
  getEtudiantId(id : any){
    if (id != undefined) {

      this.Etudiants.forEach((element: any | Array <any>) => {
        for (let i = 0; i < element.length; i++) {
          const el = element[i];
          if (el.id === id) {
            this.etudiantForm = el;
            this.IdEtudiant = id;
            console.log(el);
          }
        }
      });
    }

  }

  // Pour Modifier l'etudiant en question :
  updateEtudiant(){
    this.dataS.updateEtudiant(this.IdEtudiant,this.etudiantForm).subscribe(res => {
      this.route.navigate(['/etudiant/filiere']);
    });
  }

  // Pour la supression d'un Etudiant :
  delete(id: any) {
    // console.log(id);
    this.dataS.deleteEtudiant(id).subscribe(res => {
      this.route.navigate(['/etudiant/filiere']);
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}

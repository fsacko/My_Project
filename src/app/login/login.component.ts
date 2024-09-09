import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private formB:FormBuilder, private router:Router,private auth:AuthService,private data:DataService,public spinner: NgxSpinnerService ){}
  loginFormGroup!: FormGroup;
  errorMessage: any;
  AuthentificationService: any;
  universites: any;
  ngOnInit(): void {
    this.loginFormGroup =this.formB.group({
      role:this.formB.control(''),
      email: this.formB.control('',Validators.compose([Validators.required,Validators.email])),
      password: this.formB.control('',Validators.compose([Validators.required,Validators.minLength(4)]))
    });
  }
  initialiser(){
    this.errorMessage='';
  }
  // Pour API laravel :
  login(): void
  {
    let email = this.loginFormGroup.value.email;
    let password = this.loginFormGroup.value.password;
    let role = this.loginFormGroup.value.role;
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    if (role == "") {
      this.errorMessage = "Veuillez Indiquer votre Role!!";
      this.router.navigateByUrl('/login');
    }
    else{

      this.auth.login(email, password,role).subscribe(res => {

        const user = res.user ;

        if (user) {
          this.data.universite_id = user.universite_id ;
          this.data.etudiantEmail = user.email;
          this.data.etudiantEmail = email;

          // const redirect = res.redirect ;
          this.data.getUser(res.user);  //Pour inserer l'utilisateur connecté dans la methode getUser du service data
          this.data.getAnnee().subscribe(annee => {this.data.annee_scolaire = annee});
          this.auth.valideUser(res,user.type,res.user.universite_id,res.user).subscribe();

          // console.log(res.access_token)

          localStorage.setItem("authToken",res.access_token);
          localStorage.setItem('name',res.user.name)
          localStorage.setItem("email",res.user.email);
          if (user.type == 'etudiant') {
            const redirectUrlE = localStorage.getItem('redirectUrlE') || res.redirect;
            localStorage.removeItem('redirectUrlE');
            this.router.navigate([redirectUrlE]);
          }
          localStorage.setItem("users",res.user.universite_id);

          const redirectUrl = localStorage.getItem('redirectUrl') || res.redirect;
          localStorage.removeItem('redirectUrl');
          this.router.navigate([redirectUrl]);
        }
        else{
          this.errorMessage = res.error;
        }
      });
    }
  }
}

// subscribe(next:(res: any) => {
//   localStorage.setItem('access_token', res.access_token);this.loading = false;this.router.navigate(['/']);}, error: (err: any) => {this.loading = false;this.errors=true;});

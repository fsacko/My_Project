import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  errorMessage: any;
  AuthentificationService: any;
  universites: any;


  constructor(private formB:FormBuilder, private router:Router,private auth:AuthService,private data:DataService ){}
  ngOnInit(): void {
    this.loginFormGroup =this.formB.group({
      email: this.formB.control('',Validators.compose([Validators.required,Validators.email])),
      password: this.formB.control('',Validators.compose([Validators.required,Validators.minLength(4)]))
    });
  }



  // Pour API laravel :

  login(): void
  {

    let email = this.loginFormGroup.value.email;
    let password = this.loginFormGroup.value.password;
    // let email = "mk79@gmail.com";
    // let password = "xHDCNkSNv:4kh3g";
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    this.auth.login(email, password).subscribe(res => {

      const user = res.user ;

      if (user) {
        console.log(user);

        const redirect = res.redirect ;
        this.data.getUser(res.user);  //Pour inserer l'utilisateur connecté dans la methode getUser du service data
        this.data.getAnnee().subscribe(annee => {this.data.annee_scolaire = annee});
        this.auth.valideUser(res,user.type).subscribe();

        this.data.universite_id = user.universite_id ;
        this.data.etudiantEmail = user.email;

        console.log(user.universite_id);

        this.data.getUniversite().subscribe(res =>{this.data.universites = res;console.log(this.data.universites);})



        this.router.navigateByUrl(redirect);

      }

      else{
        const msg = res.error;
        this.errorMessage = msg ;
        console.log(this.errorMessage);
      }

    });

  }



}

// subscribe(next:(res: any) => {
//   localStorage.setItem('access_token', res.access_token);this.loading = false;this.router.navigate(['/']);}, error: (err: any) => {this.loading = false;this.errors=true;});

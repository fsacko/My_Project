import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginFormGroup! : FormGroup;

  constructor (private fB:FormBuilder){ }

  ngOnInit(): void {
    this.loginFormGroup = this.fB.group(controlsConfig: {
      username: this.fB.(),
    });
  }

}

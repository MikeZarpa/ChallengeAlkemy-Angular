import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(_builder:FormBuilder, private authService:AuthService) {
    this.formularioLogin = _builder.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required]
    })
   }
   
   iniciarSesion(text:string){
     this.authService.onLogin();
   }

  ngOnInit(): void {
  }

}

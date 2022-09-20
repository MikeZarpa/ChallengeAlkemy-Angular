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
  status = {error:false,procesando:false}

  constructor(_builder:FormBuilder, private authService:AuthService) {
    this.formularioLogin = _builder.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required]
    })
   }
   
   iniciarSesion(text:string){
    this.status.error = false;
    this.status.procesando = true;
     this.authService.onLogin(text).then(()=>{alert("Redireccionando")}).catch(()=>{this.status.error=true;this.status.procesando=false});
   }

  ngOnInit(): void {
  }

}

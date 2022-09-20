import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IToken } from '../models/IToken';
import { TokenService } from './token.service';

const urlPost = "http://challenge-react.alkemy.org/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  header:HttpHeaders = new HttpHeaders();

  constructor(private tokenService:TokenService, private httpClient:HttpClient,private route:Router) { }

  onLogin(credenciales:string):Observable<IToken>{
    let options = {
      headers: this.header,
    }
    return this.httpClient.post<IToken>(urlPost,credenciales,options);
  }
  isLogged():boolean{
    return (this.tokenService.getToken() != null)
  }
  onLogout():void{
    this.tokenService.deleteToken();
    this.route.navigate(["/login"]);
  }
}

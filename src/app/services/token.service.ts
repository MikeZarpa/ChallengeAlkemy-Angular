import { Injectable } from '@angular/core';

const TOKEN_KEY = "TOKEN"

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string):void{
    localStorage.setItem(TOKEN_KEY,token);
  }
  getToken():string|null{
    return localStorage.getItem(TOKEN_KEY);
  }
  deleteToken():void{
    localStorage.removeItem(TOKEN_KEY);
  }
}

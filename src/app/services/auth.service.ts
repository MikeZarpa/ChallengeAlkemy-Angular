import { Injectable } from '@angular/core';
import { delay, timeout } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService:TokenService) { }

  onLogin(text:any):Promise<void>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve();},5000)
    })
  }
}

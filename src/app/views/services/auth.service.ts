import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  response : any;
  constructor(private http : HttpClient) { }

  signIn(email : string, password : string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = `email=${email}&password=${password}`;
    return this.http.post('http://localhost:8080/login', body, { headers : headers})
  }

}

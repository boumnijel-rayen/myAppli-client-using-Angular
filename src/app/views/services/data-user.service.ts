import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http : HttpClient) { }

  getUserByEmail(token:any, email : string){
    let emailObject = {email : email};
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/utilisateur/find/email', emailObject, { headers : headers})
  }
}

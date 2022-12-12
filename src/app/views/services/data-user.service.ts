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

  getAllProduct(token : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/produits/all',{headers : headers})
  }

  deleteProduct(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8080/produits/delete/'+id,{headers : headers})
  }

  getAllCat(token : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/categorie/all/',{headers : headers})
  }

  getAllLab(token : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/laboratoire/all/',{headers : headers})
  }

  getProductById(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/produits/find/'+id,{headers : headers})
  }

  updateProduct(token: any, id : any, product : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/produits/update/'+id, product,{headers : headers})
  }

  getAllSupplier(token : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/fournisseur/all/',{headers : headers})
  }

  deleteSupplier(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8080/fournisseur/delete/'+id,{headers : headers})
  }

  updateSupplier(token : any, id : any, supplier : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/fournisseur/update/'+id, supplier,{headers : headers})
  }

  addProduct(token:any, product : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.post('http://localhost:8080/produits/add', product, {headers : headers})
  }

  assignLaboToProduct(token:any, id_lab : any, id_p : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/produits/'+id_p+'/assignLP/'+id_lab,{},{headers : headers})
  }

  assignCatToProduct(token:any, id_cat : any, id_p : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/produits/'+id_p+'/assignCP/'+id_cat,{}, {headers : headers})
  }

  assignMagToProduct(token:any, id_p : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/produits/'+id_p+'/assignMP/'+1,{}, {headers : headers})
  }

  assignProduitToUser(token:any, id_u : any,id_p : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/utilisateur/'+id_u+'/assignPU/'+id_p,{}, {headers : headers})
  }
}

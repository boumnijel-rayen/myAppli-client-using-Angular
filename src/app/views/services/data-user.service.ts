import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../interfaces/commande';

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

  addSupplier(token:any, supplier : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.post('http://localhost:8080/fournisseur/add', supplier, {headers : headers})
  }

  assignSupplierToUser(token:any, id_u : any,id_fr : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8080/fournisseur/'+id_u+'/assignFU/'+id_fr,{}, {headers : headers})
  }

  getAllFactures(token:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/facture/all', {headers : headers})
  }

  deleteFacture(token:any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8080/facture/delete/'+id, {headers : headers})
  }

  towDigits(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  passerCommande(token:any, commandes : Array<Commande>, id_fr : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });

    var prix_HT = 0;
    var tva = 0;
    var resProduit: any;
    var resFacture: any;
    commandes.forEach((commande) => {
      let commandeAjout = {
        quantite : commande.quantite,
        date_fourni : commande.date_fourni
      }
      this.http.post('http://localhost:8080/commande/add/'+commande.id_p+'/'+id_fr, commandeAjout, {headers : headers}).subscribe().add(() => {
        this.http.get('http://localhost:8080/produits/find/'+commande.id_p, {headers : headers}).subscribe((data) => {
        resProduit = data;
        prix_HT = prix_HT + ((resProduit.prix_p + resProduit.prix_liv) * commande.quantite);
        tva = tva + (2 * commande.quantite);
        if (commandes.indexOf(commande) == commandes.length - 1){
          console.log(prix_HT);
          console.log(tva);
          let date = new Date();
          let date_facture = this.towDigits(date.getDate())+"-"+this.towDigits(date.getMonth()+1)+"-"+date.getFullYear()+" "+this.towDigits(date.getHours())+":"+this.towDigits(date.getMinutes())+":"+this.towDigits(date.getSeconds())
          let facture = {
            total_HT : prix_HT,
            total_TTC : prix_HT + tva,
            total_TVA : tva,
            date_facture : date_facture
          }
          this.http.post('http://localhost:8080/facture/add/', facture, {headers : headers}).subscribe(data => {
            resFacture = data;
          }).add(() => {
            this.http.put('http://localhost:8080/facture/assignFFA/'+id_fr+'/'+resFacture.id_f, {}, {headers : headers}).subscribe().add(() => {
              commandes.forEach((commande) => {
                this.http.put('http://localhost:8080/facture/assignPFA/'+commande.id_p+'/'+resFacture.id_f, {}, {headers : headers}).subscribe();
              })
            });
          })
        }
      });
      });
      
      
    });
    
  }

  chercherParMotCle(token:any, mc : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/produits/findParMot/'+mc, {headers : headers})
  }
}

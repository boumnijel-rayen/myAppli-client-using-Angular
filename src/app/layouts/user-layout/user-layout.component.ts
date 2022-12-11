import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  @ViewChild('produits') produits: any;
  @ViewChild('addProduit') addProduit: any;
  @ViewChild('addFournisseur') addFournisseur: any;
  @ViewChild('fournisseur') fournisseur: any;
  @ViewChild('commander') commander: any;
  @ViewChild('facture') facture: any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changePColor(){
    this.produits.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.produits.nativeElement.style.color = 'white';
    this.addProduit.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addProduit.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addFournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addFournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.fournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.fournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.commander.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.commander.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.facture.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.facture.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeFColor(){
    this.fournisseur.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.fournisseur.nativeElement.style.color = 'white';
    this.addProduit.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addProduit.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addFournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addFournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.produits.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.produits.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.commander.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.commander.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.facture.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.facture.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeAPColor(){
    this.addProduit.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.addProduit.nativeElement.style.color = 'white';
    this.fournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.fournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addFournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addFournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.produits.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.produits.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.commander.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.commander.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.facture.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.facture.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeAFColor(){
    this.addFournisseur.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.addFournisseur.nativeElement.style.color = 'white';
    this.fournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.fournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addProduit.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addProduit.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.produits.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.produits.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.commander.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.commander.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.facture.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.facture.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeCColor(){
    this.commander.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.commander.nativeElement.style.color = 'white';
    this.fournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.fournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addProduit.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addProduit.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.produits.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.produits.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addFournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addFournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.facture.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.facture.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeFaColor(){
    this.facture.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.facture.nativeElement.style.color = 'white';
    this.fournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.fournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addProduit.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addProduit.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.produits.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.produits.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.addFournisseur.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.addFournisseur.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.commander.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.commander.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  produits : any;
  libelle : any;
  description : any;
  prix : any;
  prix_liv : any;
  date : any;
  id_p : any;
  product : any;
  myForm : any;
  token : any = localStorage.getItem('token')
  id : any = localStorage.getItem('id')
  constructor(private dataUser : DataUserService, private builder : FormBuilder) { 
    this.myForm = this.builder.group({
      libelle : ['', Validators.required],
      description : ['', Validators.required],
      prix : ['', Validators.required],
      prix_liv : ['', Validators.required],
      date : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.dataUser.getAllProduct(this.token).subscribe(data => {
      this.produits = data;
    })
  }

  supprimer(id_p:any){
    this.dataUser.deleteProduct(this.token, id_p).subscribe();
  }

  getProduct(id_p: any,lib_p : any,description : any,date_ajout : any,prix_p : any,prix_liv : any){
    this.id_p = id_p;
    this.libelle = lib_p;
    this.description = description;
    this.date = date_ajout;
    this.prix = prix_p;
    this.prix_liv = prix_liv;
  }

  towDigits(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  modifier(id:any){
    let date = new Date(this.myForm.value.date);

    let product = {
      lib_p : this.myForm.value.libelle,
      description : this.myForm.value.description,
      prix_p : this.myForm.value.prix,
      prix_liv : this.myForm.value.prix_liv,
      date_ajout : this.towDigits(date.getDate())+"-"+this.towDigits(date.getMonth()+1)+"-"+date.getFullYear()+" "+this.towDigits(date.getHours())+":"+this.towDigits(date.getMinutes())+":"+this.towDigits(date.getSeconds())
    }
    console.log(product);
    this.dataUser.updateProduct(this.token, id, product).subscribe();
  }

}

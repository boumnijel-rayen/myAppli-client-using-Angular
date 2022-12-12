import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm : any;
  labos : any;
  categories : any;
  initialValueLabo = "Choisissez un laboratoire";
  initialValueCat = "Choisissez une catégorie";
  token : any = localStorage.getItem('token');
  id : any = localStorage.getItem('id');
  resProduit : any;
  succes:any = false;
  constructor(private builder : FormBuilder, private dataUser : DataUserService) { 
    this.myForm = this.builder.group({
      libelle : ['', Validators.required],
      description : ['', Validators.required],
      prix : ['', Validators.required],
      prix_liv : ['', Validators.required],
      dateA : [],
      laboratoire : ["Choisissez un laboratoire"],
      categorie : ["Choisissez une catégorie"]
    })
  }

  ngOnInit(): void {
    this.dataUser.getAllLab(this.token).subscribe((data:any)=>{
      this.labos = data;
    })
    this.dataUser.getAllCat(this.token).subscribe((data:any)=>{
      this.categories = data;
    })
  }

  towDigits(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  addProduct(){
    let date = new Date(this.myForm.value.dateA);

    let product = {
      lib_p : this.myForm.value.libelle,
      description : this.myForm.value.description,
      prix_p : this.myForm.value.prix,
      prix_liv : this.myForm.value.prix_liv,
      date_ajout : this.towDigits(date.getDate())+"-"+this.towDigits(date.getMonth()+1)+"-"+date.getFullYear()+" "+this.towDigits(date.getHours())+":"+this.towDigits(date.getMinutes())+":"+this.towDigits(date.getSeconds())
    }
    this.dataUser.addProduct(this.token,product).subscribe((data:any)=>{
      this.resProduit = data;
      this.succes = true;
    }).add(()=>{
      this.dataUser.assignCatToProduct(this.token,this.myForm.value.categorie,this.resProduit.id_p).subscribe().add(()=>{
        this.dataUser.assignLaboToProduct(this.token,this.myForm.value.laboratoire,this.resProduit.id_p).subscribe().add(()=>{
          this.dataUser.assignMagToProduct(this.token,this.resProduit.id_p).subscribe().add(()=>{
            this.dataUser.assignProduitToUser(this.token,this.id,this.resProduit.id_p).subscribe().add(()=>{
              this.myForm.reset();
            })
          })
        })
    })
    })
  }

}

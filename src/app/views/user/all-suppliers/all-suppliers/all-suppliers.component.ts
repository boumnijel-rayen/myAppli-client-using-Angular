import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.css']
})
export class AllSuppliersComponent implements OnInit {

  suppliers : any;
  myForm : any;
  id_fr : any;
  nom_fr : any;
  prenom_fr : any;
  email_fr : any;
  telephone_fr : any;
  adresse_fr : any;
  token : any = localStorage.getItem('token');
  id : any = localStorage.getItem('id');
  constructor(private dataUser : DataUserService, private builder : FormBuilder) { 
    this.myForm = this.builder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      telephone : ['', Validators.required],
      adresse : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.dataUser.getAllSupplier(this.token).subscribe(
      (data : any) => {
        this.suppliers = data;
      })
  }

  supprimerSupplier(id : any){
    this.dataUser.deleteSupplier(this.token, id).subscribe().add(()=>{
      this.ngOnInit();
    })
  }

  chergerSupplier(id_fr : any,prenom_fr : any,email_fr : any,telephone_fr : any,adresse_fr : any){
    this.id_fr = id_fr;
    this.prenom_fr = prenom_fr;
    this.email_fr = email_fr;
    this.telephone_fr = telephone_fr;
    this.adresse_fr = adresse_fr;
  }

  modifierSupplier(id : any){
    let supplier = {
      nom_fr : this.myForm.value.nom,
      prenom_fr : this.myForm.value.prenom,
      email_fr : this.myForm.value.email,
      telephone_fr : this.myForm.value.telephone,
      adresse_fr : this.myForm.value.adresse
    }
    console.log(id);
    console.log(supplier);
    this.dataUser.updateSupplier(this.token, id, supplier).subscribe().add(()=>{
      this.ngOnInit();
    })
  }

}

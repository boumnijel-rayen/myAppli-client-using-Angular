import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  myForm : any;
  succes: boolean = false;
  token : any = localStorage.getItem('token');
  id : any = localStorage.getItem('id');
  resSupplier : any;
  constructor(private formBuilder : FormBuilder, private dataUser : DataUserService) { 
    this.myForm = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      adresse : ['', Validators.required],
      tel : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
    });
  }

  ngOnInit(): void {
  }

  add(){
    let supplier = {
      nom_fr : this.myForm.value.nom,
      prenom_fr : this.myForm.value.prenom,
      email_fr : this.myForm.value.email,
      adresse_fr : this.myForm.value.adresse,
      telephone_fr : this.myForm.value.tel
    }
    this.dataUser.addSupplier(this.token,supplier).subscribe(data => {
      this.resSupplier = data;
      this.succes = true;
    }).add(() => {
      this.dataUser.assignSupplierToUser(this.token,this.id,this.resSupplier.id_fr).subscribe().add(() => {
        this.myForm.reset();
      })
    })
  }

}

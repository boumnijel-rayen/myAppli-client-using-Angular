import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  myForm : any;
  succes: boolean = false;
  constructor(private formBuilder : FormBuilder) { 
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
    console.log(this.myForm.value);
    this.succes = true;
  }

}

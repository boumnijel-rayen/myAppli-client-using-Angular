import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddSupplierRoutingModule } from './add-supplier-routing.module';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    AddSupplierRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddSupplierModule { }

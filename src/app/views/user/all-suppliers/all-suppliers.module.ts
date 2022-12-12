import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllSuppliersRoutingModule } from './all-suppliers-routing.module';
import { AllSuppliersComponent } from './all-suppliers/all-suppliers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllSuppliersComponent
  ],
  imports: [
    CommonModule,
    AllSuppliersRoutingModule,
    ReactiveFormsModule
  ]
})
export class AllSuppliersModule { }

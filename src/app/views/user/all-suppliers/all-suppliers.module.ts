import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllSuppliersRoutingModule } from './all-suppliers-routing.module';
import { AllSuppliersComponent } from './all-suppliers/all-suppliers.component';


@NgModule({
  declarations: [
    AllSuppliersComponent
  ],
  imports: [
    CommonModule,
    AllSuppliersRoutingModule
  ]
})
export class AllSuppliersModule { }

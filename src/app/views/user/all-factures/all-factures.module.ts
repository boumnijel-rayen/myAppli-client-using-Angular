import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFacturesRoutingModule } from './all-factures-routing.module';
import { AllFacturesComponent } from './all-factures/all-factures.component';


@NgModule({
  declarations: [
    AllFacturesComponent
  ],
  imports: [
    CommonModule,
    AllFacturesRoutingModule
  ]
})
export class AllFacturesModule { }

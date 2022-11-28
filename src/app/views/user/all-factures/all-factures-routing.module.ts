import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFacturesComponent } from './all-factures/all-factures.component';

const routes: Routes = [
  {path: '', component: AllFacturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFacturesRoutingModule { }

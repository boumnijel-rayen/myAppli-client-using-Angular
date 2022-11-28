import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanderRoutingModule } from './commander-routing.module';
import { CommanderComponent } from './commander/commander.component';


@NgModule({
  declarations: [
    CommanderComponent
  ],
  imports: [
    CommonModule,
    CommanderRoutingModule
  ]
})
export class CommanderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoBRoutingModule } from './demo-b-routing.module';
import { DemoBComponent } from './demo-b.component';


@NgModule({
  declarations: [
    DemoBComponent
  ],
  imports: [
    CommonModule,
    DemoBRoutingModule
  ]
})
export class DemoBModule { }

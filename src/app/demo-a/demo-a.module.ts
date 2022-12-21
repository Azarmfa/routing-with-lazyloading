import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoARoutingModule } from './demo-a-routing.module';
import { DemoAComponent } from './demo-a.component';
import { TestAComponent } from './test-a/test-a.component';


@NgModule({
  declarations: [
    DemoAComponent,
    TestAComponent
  ],
  imports: [
    CommonModule,
    DemoARoutingModule
  ]
})
export class DemoAModule { }

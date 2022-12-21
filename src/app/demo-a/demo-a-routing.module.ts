import { TestAComponent } from './test-a/test-a.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAComponent } from './demo-a.component';

const routes: Routes = [
  { path: '', component: DemoAComponent },
  { path: 'test', component: TestAComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoARoutingModule {}

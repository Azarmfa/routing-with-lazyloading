import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./demo-a/demo-a.module').then((m) => m.DemoAModule),
  },
  {
    path: 'b',
    loadChildren: () =>
      import('./demo-b/demo-b.module').then((m) => m.DemoBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

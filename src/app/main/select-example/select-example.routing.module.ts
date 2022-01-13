import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectExampleComponent } from './select-example.component';

const routes: Routes = [
    {
      path: 'select-example',
      component : SelectExampleComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectExampleRoutingModule { }

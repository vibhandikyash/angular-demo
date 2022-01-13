import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
    {
      path: 'users-data',
      component : UserTableComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

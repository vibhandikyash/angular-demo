import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: () => import('./main/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'custom',
        loadChildren: () => import('./main/select-example/select-example.module').then(m => m.SelectExampleModule)
    },
    {
        path: '',
        redirectTo: 'custom/select-example',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

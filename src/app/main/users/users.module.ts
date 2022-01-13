import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule, MatInputModule, MatSortModule, MatButtonModule, MatPaginatorModule, MatOptionModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserTableComponent,
  ],
  imports: [
    UsersRoutingModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxPaginationModule
  ],
  providers: [],
})

export class UsersModule { }

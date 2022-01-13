import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatInputModule, MatSortModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { SelectExampleComponent } from './select-example.component';
import { SelectExampleRoutingModule } from './select-example.routing.module';
import { HandleImageErrorDirective } from '../../directives/handle-image-error.directive';
import { ScrollToElementDirective } from '../../directives/scroll-to-element.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectExampleComponent,
    HandleImageErrorDirective,
    ScrollToElementDirective
  ],
  imports: [
    SelectExampleRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
})

export class SelectExampleModule { }

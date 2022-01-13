import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleComponent } from './select-example.component';
import { SelectExampleRoutingModule } from './select-example.routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


describe('SelectExampleComponent', () => {
  let component: SelectExampleComponent;
  let fixture: ComponentFixture<SelectExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SelectExampleRoutingModule,
        FormsModule,
        NgSelectModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SelectExampleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button and value should be Scroll To Bottom', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn').textContent).toContain('Scroll To Bottom');

  })

  it('should navigate to user on click user data', () => {
    let href = fixture.debugElement.query(By.css('.userdataclass')).nativeElement; 
    expect(href.getAttribute('routerLink')).toEqual('/users/users-data');
  })

  it('should have text Select Dropdown Example ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#select-dropdown').textContent).toContain('Select Dropdown Example');

  })

});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatButtonModule,
  MatPaginatorModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
} from "@angular/material";
import { UserTableComponent } from "./user-table.component";
import { NgxPaginationModule } from "ngx-pagination";
import { UsersRoutingModule } from "../users.routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UserTableComponent", () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxPaginationModule,
        HttpClientTestingModule,
      ],
      declarations: [UserTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call function get users", () => {
    spyOn(component, "getUsers").and.callThrough();
    component.ngOnInit();
    expect(component.getUsers).toHaveBeenCalled();
  });

  it("should have users length value", () => {
    component.getUsers();
    expect(component.length).length > 0;
  });

  it("should have text filter for label ", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("mat-label").textContent).toContain("Filter");
  });
});

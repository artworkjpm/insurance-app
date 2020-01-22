import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FavTableComponent } from "./fav-table.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("FavTableComponent", () => {
  let component: FavTableComponent;
  let fixture: ComponentFixture<FavTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavTableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*   it("should create", () => {
    expect(component).toBeTruthy();
  }); */
});

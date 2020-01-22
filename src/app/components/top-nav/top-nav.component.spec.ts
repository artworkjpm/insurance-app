import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopNavComponent } from "./top-nav.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TopNavComponent", () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*  it("should create", () => {
    expect(component).toBeTruthy();
  }); */
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatTableModule } from "@angular/material";
import { HomeComponent } from "./home.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
/* import { InsService } from "src/app/services/ins.service"; */

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*   it("should create", () => {
    expect(component).toBeTruthy();
  }); */
  /*
  this.inService.getInsProducts().subscribe(items => {
    this.items = items;}); */

  /*  let removeDuplicates = this.kinds.filter(
      (v, i, a) => a.findIndex(t => t.kind === v.kind) === i
    ); */
});

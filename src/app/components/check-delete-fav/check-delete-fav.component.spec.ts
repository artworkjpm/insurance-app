import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckDeleteFavComponent } from "./check-delete-fav.component";
import { MatDialogModule } from "@angular/material/dialog";

describe("CheckDeleteFavComponent", () => {
  let component: CheckDeleteFavComponent;
  let fixture: ComponentFixture<CheckDeleteFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckDeleteFavComponent],
      imports: [MatDialogModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDeleteFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

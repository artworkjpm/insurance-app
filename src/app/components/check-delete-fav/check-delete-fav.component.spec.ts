import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeleteFavComponent } from './check-delete-fav.component';

describe('CheckDeleteFavComponent', () => {
  let component: CheckDeleteFavComponent;
  let fixture: ComponentFixture<CheckDeleteFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDeleteFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDeleteFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

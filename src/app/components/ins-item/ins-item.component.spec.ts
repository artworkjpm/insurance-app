import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsItemComponent } from './ins-item.component';

describe('InsItemComponent', () => {
  let component: InsItemComponent;
  let fixture: ComponentFixture<InsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashToCloseComponent } from './cash-to-close.component';

describe('CashToCloseComponent', () => {
  let component: CashToCloseComponent;
  let fixture: ComponentFixture<CashToCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashToCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashToCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

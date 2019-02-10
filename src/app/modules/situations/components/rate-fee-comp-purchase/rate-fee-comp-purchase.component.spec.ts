import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateFeeCompPurchaseComponent } from './rate-fee-comp-purchase.component';

describe('RateFeeCompPurchaseComponent', () => {
  let component: RateFeeCompPurchaseComponent;
  let fixture: ComponentFixture<RateFeeCompPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateFeeCompPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateFeeCompPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

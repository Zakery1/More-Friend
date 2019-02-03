import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOnePropDpComponent } from './price-one-prop-dp.component';

describe('PriceOnePropDpComponent', () => {
  let component: PriceOnePropDpComponent;
  let fixture: ComponentFixture<PriceOnePropDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceOnePropDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOnePropDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

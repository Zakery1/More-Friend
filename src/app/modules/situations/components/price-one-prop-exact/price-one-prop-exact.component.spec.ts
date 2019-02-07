import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOnePropExactComponent } from './price-one-prop-exact.component';

describe('PriceOnePropExactComponent', () => {
  let component: PriceOnePropExactComponent;
  let fixture: ComponentFixture<PriceOnePropExactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceOnePropExactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOnePropExactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

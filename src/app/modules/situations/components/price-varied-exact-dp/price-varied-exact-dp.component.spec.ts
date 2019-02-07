import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceVariedExactDpComponent } from './price-varied-exact-dp.component';

describe('PriceVariedExactDpComponent', () => {
  let component: PriceVariedExactDpComponent;
  let fixture: ComponentFixture<PriceVariedExactDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceVariedExactDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceVariedExactDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

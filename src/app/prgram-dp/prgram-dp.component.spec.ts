import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgramDPComponent } from './prgram-dp.component';

describe('PrgramDPComponent', () => {
  let component: PrgramDPComponent;
  let fixture: ComponentFixture<PrgramDPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrgramDPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrgramDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

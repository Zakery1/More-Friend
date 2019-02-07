import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDpComponent } from './program-dp.component';

describe('ProgramDpComponent', () => {
  let component: ProgramDpComponent;
  let fixture: ComponentFixture<ProgramDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

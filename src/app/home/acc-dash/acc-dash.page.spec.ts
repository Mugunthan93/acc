import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDashPage } from './acc-dash.page';

describe('AccDashPage', () => {
  let component: AccDashPage;
  let fixture: ComponentFixture<AccDashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccDashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

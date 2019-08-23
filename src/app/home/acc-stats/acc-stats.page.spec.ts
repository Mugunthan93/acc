import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccStatsPage } from './acc-stats.page';

describe('AccStatsPage', () => {
  let component: AccStatsPage;
  let fixture: ComponentFixture<AccStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

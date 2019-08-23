import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccGroupsPage } from './acc-groups.page';

describe('AccGroupsPage', () => {
  let component: AccGroupsPage;
  let fixture: ComponentFixture<AccGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

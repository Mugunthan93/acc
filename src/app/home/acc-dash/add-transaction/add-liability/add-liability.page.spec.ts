import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiabilityPage } from './add-liability.page';

describe('AddLiabilityPage', () => {
  let component: AddLiabilityPage;
  let fixture: ComponentFixture<AddLiabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLiabilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetPage } from './add-asset.page';

describe('AddAssetPage', () => {
  let component: AddAssetPage;
  let fixture: ComponentFixture<AddAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

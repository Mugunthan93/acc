import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFriendsPage } from './acc-friends.page';

describe('AccFriendsPage', () => {
  let component: AccFriendsPage;
  let fixture: ComponentFixture<AccFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFriendsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SixnumsComponent } from './sixnums.component';

describe('SixnumsComponent', () => {
  let component: SixnumsComponent;
  let fixture: ComponentFixture<SixnumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixnumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixnumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

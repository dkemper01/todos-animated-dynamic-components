/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipComponent } from './tip.component';

describe('TipComponent', () => {
  let component: TipComponent;
  let fixture: ComponentFixture<TipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipComponent);
    component = fixture.componentInstance;
    component.data = { tip: "Test tip" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

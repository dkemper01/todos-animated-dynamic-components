/* tslint:disable:no-unused-variable */
import { Directive, ViewContainerRef } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { LoadDynamicDirective } from './load-dynamic.directive';

describe('LoadDynamicDirective', () => {
  let component: LoadDynamicDirective;
  let fixture: ComponentFixture<LoadDynamicDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDynamicDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDynamicDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


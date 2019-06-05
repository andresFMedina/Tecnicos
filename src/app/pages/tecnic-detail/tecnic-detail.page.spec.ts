import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicDetailPage } from './tecnic-detail.page';

describe('TecnicDetailPage', () => {
  let component: TecnicDetailPage;
  let fixture: ComponentFixture<TecnicDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

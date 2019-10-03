import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprodukPage } from './listproduk.page';

describe('ListprodukPage', () => {
  let component: ListprodukPage;
  let fixture: ComponentFixture<ListprodukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprodukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

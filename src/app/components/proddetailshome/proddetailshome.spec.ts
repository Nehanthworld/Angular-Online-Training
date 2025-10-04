import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proddetailshome } from './proddetailshome';

describe('Proddetailshome', () => {
  let component: Proddetailshome;
  let fixture: ComponentFixture<Proddetailshome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Proddetailshome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proddetailshome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

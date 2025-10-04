import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producthome } from './producthome';

describe('Producthome', () => {
  let component: Producthome;
  let fixture: ComponentFixture<Producthome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Producthome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producthome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

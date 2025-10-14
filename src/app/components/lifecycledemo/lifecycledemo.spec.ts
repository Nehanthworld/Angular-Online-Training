import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycledemo } from './lifecycledemo';

describe('Lifecycledemo', () => {
  let component: Lifecycledemo;
  let fixture: ComponentFixture<Lifecycledemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lifecycledemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecycledemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

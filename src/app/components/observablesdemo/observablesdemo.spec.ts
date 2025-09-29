import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observablesdemo } from './observablesdemo';

describe('Observablesdemo', () => {
  let component: Observablesdemo;
  let fixture: ComponentFixture<Observablesdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Observablesdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observablesdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

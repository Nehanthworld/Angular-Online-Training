import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childdemo } from './childdemo';

describe('Childdemo', () => {
  let component: Childdemo;
  let fixture: ComponentFixture<Childdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Childdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

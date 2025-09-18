import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGrid } from './common-grid';

describe('CommonGrid', () => {
  let component: CommonGrid;
  let fixture: ComponentFixture<CommonGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

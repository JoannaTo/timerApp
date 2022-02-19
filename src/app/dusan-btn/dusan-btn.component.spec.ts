import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DusanBtnComponent } from './dusan-btn.component';

describe('DusanBtnComponent', () => {
  let component: DusanBtnComponent;
  let fixture: ComponentFixture<DusanBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DusanBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DusanBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

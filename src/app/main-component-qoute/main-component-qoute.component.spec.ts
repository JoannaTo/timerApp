import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponentQouteComponent } from './main-component-qoute.component';

describe('MainComponentQouteComponent', () => {
  let component: MainComponentQouteComponent;
  let fixture: ComponentFixture<MainComponentQouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponentQouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponentQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

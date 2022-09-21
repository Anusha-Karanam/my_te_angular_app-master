import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalmartdealsComponent } from './walmartdeals.component';

describe('WalmartdealsComponent', () => {
  let component: WalmartdealsComponent;
  let fixture: ComponentFixture<WalmartdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalmartdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalmartdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

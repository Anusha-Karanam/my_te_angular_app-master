import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysdealsComponent } from './toysdeals.component';

describe('ToysdealsComponent', () => {
  let component: ToysdealsComponent;
  let fixture: ComponentFixture<ToysdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

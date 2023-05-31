import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOptionComponent } from './travel-option.component';

describe('TravelOptionComponent', () => {
  let component: TravelOptionComponent;
  let fixture: ComponentFixture<TravelOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelOptionComponent]
    });
    fixture = TestBed.createComponent(TravelOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSectionSliderComponent } from './spa-section-slider.component';

describe('SpaSectionSliderComponent', () => {
  let component: SpaSectionSliderComponent;
  let fixture: ComponentFixture<SpaSectionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaSectionSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaSectionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

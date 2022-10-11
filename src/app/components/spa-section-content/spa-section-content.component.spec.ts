import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSectionContentComponent } from './spa-section-content.component';

describe('SpaSectionContentComponent', () => {
  let component: SpaSectionContentComponent;
  let fixture: ComponentFixture<SpaSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaSectionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

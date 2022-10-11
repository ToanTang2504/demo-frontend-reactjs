import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSectionFooterComponent } from './spa-section-footer.component';

describe('SpaSectionFooterComponent', () => {
  let component: SpaSectionFooterComponent;
  let fixture: ComponentFixture<SpaSectionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaSectionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

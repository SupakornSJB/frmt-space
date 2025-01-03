import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceDisplayComponent } from './distance-display.component';

describe('DistanceDisplayComponent', () => {
  let component: DistanceDisplayComponent;
  let fixture: ComponentFixture<DistanceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

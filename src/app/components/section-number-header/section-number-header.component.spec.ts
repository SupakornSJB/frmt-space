import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNumberHeaderComponent } from './section-number-header.component';

describe('SectionNumberHeaderComponent', () => {
  let component: SectionNumberHeaderComponent;
  let fixture: ComponentFixture<SectionNumberHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNumberHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionNumberHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

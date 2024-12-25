import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCircularSelectorComponent } from './index-circular-selector.component';

describe('IndexCircularSelectorComponent', () => {
  let component: IndexCircularSelectorComponent;
  let fixture: ComponentFixture<IndexCircularSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCircularSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCircularSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

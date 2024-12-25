import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCircularSelectorWithNumComponent } from './index-circular-selector-with-num.component';

describe('IndexCircularSelectorWithNumComponent', () => {
  let component: IndexCircularSelectorWithNumComponent;
  let fixture: ComponentFixture<IndexCircularSelectorWithNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCircularSelectorWithNumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCircularSelectorWithNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

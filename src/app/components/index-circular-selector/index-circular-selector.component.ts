import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-index-circular-selector',
  imports: [],
  templateUrl: './index-circular-selector.component.html',
  styleUrl: './index-circular-selector.component.scss'
})
export class IndexCircularSelectorComponent {
  @Input() currentIndex: number = 0;
  @Input() numberOfChoices: number = 0;
  @Output() onIndexPress: EventEmitter<number> = new EventEmitter<number>();

  get itemArray() {
    return Array(this.numberOfChoices).fill(0).map((_, index) => ({ id: index }));
  }

  pressButton(index: number) {
    this.onIndexPress.emit(index);
  }
}

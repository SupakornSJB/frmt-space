import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-index-circular-selector-with-num',
  imports: [CommonModule],
  templateUrl: './index-circular-selector-with-num.component.html',
  styleUrl: './index-circular-selector-with-num.component.scss'
})
export class IndexCircularSelectorWithNumComponent {
  constructor(public dataService: DataService) { }

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

import { Component, Input } from '@angular/core';

export interface IDistanceDisplay {
  title: string,
  data: string
}

@Component({
  selector: 'app-distance-display',
  imports: [],
  templateUrl: './distance-display.component.html',
  styleUrl: './distance-display.component.scss'
})
export class DistanceDisplayComponent {
  @Input() displayList: IDistanceDisplay[] = [];
}

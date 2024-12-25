import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { DistanceDisplayComponent, IDistanceDisplay } from '../../components/distance-display/distance-display.component';
import { SectionNumberHeaderComponent } from '../../components/section-number-header/section-number-header.component';

@Component({
  selector: 'app-destination',
  imports: [CommonModule, DistanceDisplayComponent, SectionNumberHeaderComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {

  constructor(public dataService: DataService) { }

  setCurrentDestination(destIndex: number) {
    this.dataService.destinationIndex.next(destIndex);
  }

  get displayList(): IDistanceDisplay[] {
    return [
      {
        title: "Avg. Distance",
        data: this.dataService.currentDestination.distance
      },
      {
        title: "Est. Travel Time",
        data: this.dataService.currentDestination.travel
      }
    ]
  }
}

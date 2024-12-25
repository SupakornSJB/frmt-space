import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SectionNumberHeaderComponent } from '../../components/section-number-header/section-number-header.component';
import { IndexCircularSelectorComponent } from '../../components/index-circular-selector/index-circular-selector.component';

@Component({
  selector: 'app-crews',
  imports: [SectionNumberHeaderComponent, IndexCircularSelectorComponent],
  templateUrl: './crews.component.html',
  styleUrl: './crews.component.scss'
})
export class CrewsComponent {
  constructor(public dataService: DataService) { }

  setCrewIndex(index: number) {
    this.dataService.currentCrewIndex = index;
  }
}

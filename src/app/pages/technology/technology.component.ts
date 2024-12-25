import { Component } from '@angular/core';
import { SectionNumberHeaderComponent } from '../../components/section-number-header/section-number-header.component';
import { DataService } from '../../services/data.service';
import { IndexCircularSelectorWithNumComponent } from '../../components/index-circular-selector-with-num/index-circular-selector-with-num.component';

@Component({
  selector: 'app-technology',
  imports: [SectionNumberHeaderComponent, IndexCircularSelectorWithNumComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  constructor(public dataService: DataService) { }

  setTechnologyIndex(index: number) {
    this.dataService.currentTechnologyIndex = index;
  }
}

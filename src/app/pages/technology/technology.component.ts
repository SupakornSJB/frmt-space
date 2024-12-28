import { Component } from '@angular/core';
import { SectionNumberHeaderComponent } from '../../components/section-number-header/section-number-header.component';
import { DataService } from '../../services/data.service';
import { IndexCircularSelectorWithNumComponent } from '../../components/index-circular-selector-with-num/index-circular-selector-with-num.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [SectionNumberHeaderComponent, IndexCircularSelectorWithNumComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  isLandscape: boolean = false;

  constructor(public dataService: DataService, public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe((result) => {
      this.isLandscape = result.matches;
    })
  }

  get imgSrc() {
    if (this.isLandscape)
      return this.dataService.currentTechnology.images.landscape;
    else
      return this.dataService.currentTechnology.images.portrait;
  }

  setTechnologyIndex(index: number) {
    this.dataService.currentTechnologyIndex = index;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-number-header',
  imports: [],
  templateUrl: './section-number-header.component.html',
  styleUrl: './section-number-header.component.scss'
})
export class SectionNumberHeaderComponent {
  @Input() sectionNumber: number = 0;
  @Input() title: string = "";
}

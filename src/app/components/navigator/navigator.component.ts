import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-navigator',
  imports: [CommonModule],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent {
  @Input() isVertical: boolean = false;
  @Output() onRouteSelected: EventEmitter<void> = new EventEmitter();

  constructor(public navigateService: NavigateService) { }

  selectRoute(title: string) {
    this.onRouteSelected.emit();
    this.navigateService.navigateToRoute(title);
  }
}

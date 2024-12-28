import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { NavigateService } from './services/navigate.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSmallScreen: boolean = false;
  isNavbarShowing: boolean = false;

  constructor(
    public navigatorService: NavigateService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
    ]).subscribe((result) => {
      this.isSmallScreen = result.matches;
      if (!result.matches) this.isNavbarShowing = false;
    })
  }

  toggleNavBar() {
    this.isNavbarShowing = !this.isNavbarShowing;
  }
}

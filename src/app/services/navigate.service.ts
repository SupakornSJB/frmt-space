import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  public navigatable = ["Home", "Destination", "Crew", "Technology"];
  categories: Record<string, boolean>;

  constructor(private router: Router) {
    this.categories = this.navigatable.reduce<Record<string, boolean>>((acc, current) => {
      acc[current] = false;
      return acc;
    }, {})

    this.router.events
      .pipe((filter((event) => event instanceof NavigationEnd)))
      .subscribe((event: NavigationEnd) => {
        for (let route of Object.keys(this.categories)) {
          this.categories[route] = event.url.toLowerCase().includes(route.toLowerCase())
        }
      })
  }

  navigateToRoute(routeName: string): void {
    this.router.navigateByUrl("/" + routeName.toLowerCase());
  }

  isCurrentRoute(routeName: string) {
    return this.router.url.includes(routeName.toLowerCase());
  }
}

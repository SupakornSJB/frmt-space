import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewsComponent } from './pages/crews/crews.component';
import { TechnologyComponent } from './pages/technology/technology.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "home",
    redirectTo: "",
  },
  {
    path: "destination",
    component: DestinationComponent,
  },
  {
    path: "crew",
    component: CrewsComponent,
  },
  {
    path: "technology",
    component: TechnologyComponent,
  },
];

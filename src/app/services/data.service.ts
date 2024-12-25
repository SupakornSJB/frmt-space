import { Injectable } from '@angular/core';
import * as data from "./../../../public/assets/data/data.json";
import { BehaviorSubject } from 'rxjs';

export interface IData {
  crew: {
    name: string,
    images: {
      png: string,
      webp: string,
    },
    role: string
    bio: string,
  }[],
  technology: {
    name: string,
    images: {
      portrait: string,
      landscape: string,
    },
    description: string,
  }[],
  destinations: {
    name: string,
    images: {
      png: string,
      webp: string,
    },
    description: string,
    distance: string,
    travel: string,
  }[],
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public crewIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public destinationIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public technologyIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get data(): IData {
    return data;
  }

  get currentCrew() {
    return data.crew[this.crewIndex.value];
  }

  get currentDestination() {
    return data.destinations[this.destinationIndex.value];
  }

  get currentTechnology() {
    return data.technology[this.technologyIndex.value];
  }

  get currentCrewIndex() {
    return this.crewIndex.value;
  }

  get currentDestinationIndex() {
    return this.destinationIndex.value;
  }

  get currentTechnologyIndex() {
    return this.technologyIndex.value;
  }

  set currentCrewIndex(index: number) {
    if (index < 0 || index >= data.crew.length) return;
    this.crewIndex.next(index);
  }

  set currentDestinationIndex(index: number) {
    if (index < 0 || index >= data.destinations.length) return;
    this.destinationIndex.next(index);
  }

  set currentTechnologyIndex(index: number) {
    if (index < 0 || index >= data.technology.length) return;
    this.technologyIndex.next(index);
  }
}

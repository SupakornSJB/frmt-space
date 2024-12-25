import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string;
  article: string;
  header: string;

  constructor(private router: Router) {
    this.title = "space";
    this.article = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";
    this.header = "So, You want to travel to";
  }

  explore() {
    this.router.navigateByUrl("/destination");
  }
}

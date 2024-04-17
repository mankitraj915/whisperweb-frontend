import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NavcardComponent } from './MyComponents/navcard/navcard.component';
import { ProfilecardComponent } from './MyComponents/profilecard/profilecard.component';
import { SearchcardComponent } from './MyComponents/searchcard/searchcard.component';
import { TrendingcardComponent } from './MyComponents/trendingcard/trendingcard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NavcardComponent,ProfilecardComponent,SearchcardComponent,TrendingcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

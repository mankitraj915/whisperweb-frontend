import { Component } from '@angular/core';
import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { AddconfessionformComponent } from '../addconfessionform/addconfessionform.component';

@Component({
  selector: 'app-addconfession',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,AddconfessionformComponent],
  templateUrl: './addconfession.component.html',
  styleUrl: './addconfession.component.css'
})
export class AddconfessionComponent {

}

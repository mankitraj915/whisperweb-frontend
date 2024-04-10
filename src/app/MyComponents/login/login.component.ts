import { Component } from '@angular/core';

import { NavcardComponent } from '../navcard/navcard.component';
import { ProfilecardComponent } from '../profilecard/profilecard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchcardComponent } from '../searchcard/searchcard.component';
import { TrendingcardComponent } from '../trendingcard/trendingcard.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavcardComponent,ProfilecardComponent,CommonModule,FormsModule,RouterLink,SearchcardComponent,TrendingcardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string='';
  constructor() { }

  handleLogin() {
    if(this.email == '' || this.password == '') {
      alert('Please fill all the fields');
      return;
    }

    console.log(this.email);
    console.log(this.password);
  }
}

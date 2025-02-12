import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router } from '@angular/router';


@Component({
  selector: 'app-profilecard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './profilecard.component.html',
  styleUrl: './profilecard.component.css',
})
export class ProfilecardComponent {
  constructor(private router: Router) {}

  user: any = {};

  fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/getuserdetails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      this.user = data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  handleLogout =  () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  ngOnInit() {
    this.fetchUser();
  }
}

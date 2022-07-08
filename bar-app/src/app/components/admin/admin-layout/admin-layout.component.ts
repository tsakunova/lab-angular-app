import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/admin/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  isLogged: boolean;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn;
  }

  getLoggedValue() {
    this.isLogged = this.authService.isLoggedIn;
    return this.isLogged;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.SignOut().then(() => this.getLoggedValue());
  }
}

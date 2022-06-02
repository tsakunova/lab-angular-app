import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/admin/auth.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss'],
})
export class AdminSettingComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
}

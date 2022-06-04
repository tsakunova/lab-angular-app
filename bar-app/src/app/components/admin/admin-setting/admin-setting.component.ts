import { Component } from '@angular/core';
import { AuthService } from '../../shared/admin/auth.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss'],
})
export class AdminSettingComponent {
  constructor(public authService: AuthService) { }
}

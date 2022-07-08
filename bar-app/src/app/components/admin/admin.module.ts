import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { AuthService } from '../shared/admin/auth.service';
import { AuthGuard } from '../shared/admin/guard/auth.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginPageComponent,
    AdminSettingComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
          { path: 'setting', component: AdminSettingComponent, canActivate: [AuthGuard] },
          { path: 'edit', component: AdminEditComponent, canActivate: [AuthGuard] }
        ]
      }]),
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    OverlayModule,
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AdminModule { }

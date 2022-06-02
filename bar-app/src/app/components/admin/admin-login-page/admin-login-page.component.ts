import {
  Component, OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/admin/auth.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})

export class AdminLoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(public autService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  submit() {
    this.form.reset();
    if (this.form.invalid) {
      return;
    }
    this.autService.SignIn(this.form.value.email, this.form.value.password);
  }
}

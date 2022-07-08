import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['/admin', 'setting']);
      } else {
        localStorage.removeItem('user');
        this.router.navigate(['admin']);
      }
    },
    error => console.log(error));
  }

  async SignIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      window.alert('User is not admin!');
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return !!user;
  }

  async SignOut() {
    try {
      await this.afAuth.signOut();
    } catch (e) {
      console.log(e);
    }
  }
}

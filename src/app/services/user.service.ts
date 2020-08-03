import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  constructor(private firestore: AngularFirestore, public auth: AngularFireAuth, private router: Router) { 
    this.auth.user.subscribe(val => {
      this.currentUser = val
      console.log(this.currentUser)
    })
    
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => this.router.navigate(['/home']));
   
  }
  
  logout() {
    this.auth.signOut().then(res => this.router.navigate(['/home']))
  }

  isLoggedIn(){
    return this.auth.authState.pipe(first()).toPromise();
  }

}
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Database76';

  constructor(private userService: UserService, public auth: AngularFireAuth) { }
 
  loggedIn: User
  
  login() {
    this.userService.login();
  }
  
  logout() {
    this.userService.logout()
  }

  isLoggedIn(){
    return this.auth.authState.pipe(first()).toPromise();
  }

  ngOnInit(): void {
  
  }
  
  
}


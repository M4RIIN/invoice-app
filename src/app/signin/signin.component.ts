import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { User } from 'src/assets/model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private authService:AuthService,private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  signin(){
    this.authService.signIn(new User());
  }

  logout(){
    this.authService.doLogout();
  }

}

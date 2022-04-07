import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signin(){
    this.authService.signIn(new User());
  }

  logout(){
    this.authService.doLogout();
  }

}

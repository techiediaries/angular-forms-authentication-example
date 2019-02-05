import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form){
    console.log(form.value);
    this.authService.signIn(form.value).subscribe(()=>{
      console.log("Logged in!");
      this.router.navigateByUrl('home');
    });    
  }

}

import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  model:User=new User();
  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.model);
    console.log(this.model.username)
    console.log(this.model.password)
    console.log(this.accountService.isLoggedIn())
  }

}

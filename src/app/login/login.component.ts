import { ApiService } from './../shared/api.service';
import { UserModel } from './../shared/model/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginObj = new UserModel();
  constructor(private fb : FormBuilder,private api : ApiService,private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : [''],
      password:['']
    })
  }
  login(){
    this.loginObj.UserName = this.loginForm.value.username;
    this.loginObj.Password = this.loginForm.value.password;
    this.api.loginUser(this.loginObj)
    .subscribe(res=>{
      alert(res.message);
      this.loginForm.reset();
      this.router.navigate(['dashboard']);
    })
  }
}

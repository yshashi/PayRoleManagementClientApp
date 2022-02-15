import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
  public signupObj = new UserModel();
  constructor(private fb : FormBuilder,private api : ApiService,private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username:[''],
      password:[''],
      email:[''],
      mobile:[''],
      fullname:['']
    })
  }
  signUp(){
    this.signupObj.FullName = this.signupForm.value.fullname;
    this.signupObj.UserName = this.signupForm.value.username;
    this.signupObj.Password = this.signupForm.value.password;
    this.signupObj.Email = this.signupForm.value.email;
    this.signupObj.Mobile = this.signupForm.value.mobile;
    this.api.signUpUser(this.signupObj)
    .subscribe(res=>{
      alert(res.message);
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}

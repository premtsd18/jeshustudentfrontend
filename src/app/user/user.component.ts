import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  showSucessMessage: boolean;
  signUpErrorMessage: string;
  signUpForm:FormGroup;
  signInForm:FormGroup;
  signInErrorMessages: string;
  constructor(private userService: UserService,private fb: FormBuilder,private router : Router) { }

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');

    this.signUpForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+([ ][a-zA-Z]*)?$')]],
      mobileNo:['',[Validators.required,Validators.pattern('^[1-9][0-9]{9}$')]],
      password:['',[Validators.required,Validators.pattern('^[0-9a-zA-Z!@#$]{8,15}$')]],
      repassword:['',[Validators.required,password]]
    });

    this.signInForm = this.fb.group({

      mobileNo:['',[Validators.required,Validators.pattern('^[1-9][0-9]{9}$')]],
      password:['',[Validators.required,Validators.pattern('^.{8,15}$')]]
    });
  }
  signin:boolean;
  submitSignUp() {
    this.signUpErrorMessage=null;
    this.userService.postUser(this.signUpForm.value).subscribe(
      suc=>{this.showSucessMessage=true;this.signin=true},err=>{this.signUpErrorMessage = err.error.join('<br/>');}
      
      
    );
  }
  signInSubmit(){
    this.showSucessMessage=false;
    this.userService.login(this.signInForm.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.signInErrorMessages = err.error.message;
      }
    );
  }



}
function password(form:FormControl){
  if(form.root.value.password!==form.value)
  return {notmatch:true}
  else
  return null;
 }
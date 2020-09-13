import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CommonModule } from '@angular/common';  
import { Router } from "@angular/router";

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
 
})
export class ViewstudentComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
student;
  ngOnInit(): void {
  
        this.userService.getstudentdata(this.router.url.split('/')[2]).subscribe(suc=>{this.student=suc.student,console.log(JSON.stringify(this.student))},err=>{})
        
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  goback(){
    this.router.navigate(['/userprofile']);
  }

}

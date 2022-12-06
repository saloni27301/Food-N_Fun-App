import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:[''],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/SignupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if (user.admin!= true) {
        alert('User Login Success!!');
        this.loginForm.reset();
        this.router.navigate(['//cart-product'])
      } else {
        alert("You are admin");
        this.loginForm.reset();
        this.router.navigate(['//products'])
      }
    },err=>{
      alert("Something went wrong")
    })
  }
}

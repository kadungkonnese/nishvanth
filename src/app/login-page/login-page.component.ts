import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formdata = {email:"",password:""};
  
  submit=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}

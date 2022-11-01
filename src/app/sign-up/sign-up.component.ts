import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formdata = {name:"", email:"", password:"",confirmpassword:""};
  submit = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formdata);
    
    }
    isChecked: boolean = false;
    
    doSomething(){
      
      this.isChecked = !this.isChecked;
      
      // this.isChecked = true   <- to make only checked
      // this.isChecked = false  <- to make only unchecked
      // Write your stuff here
    }
}

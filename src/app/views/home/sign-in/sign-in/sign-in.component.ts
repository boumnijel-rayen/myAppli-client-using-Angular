import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm: any;
  response : any;
  resEmail : any;
  invalidLogin :any
  constructor(private builder : FormBuilder, private auth : AuthService, private router : Router, private dataUser : DataUserService) { 
    this.myForm = this.builder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connect(){
    this.auth.signIn(this.myForm.value.email, this.myForm.value.password).subscribe(
      (data) => {
        this.response = data;
        localStorage.setItem('token', this.response.token);
        this.invalidLogin = false;
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    ).add(() => {
      this.dataUser.getUserByEmail(this.response.token, this.myForm.value.email).subscribe(data => {
        this.resEmail = data;
        console.log(this.resEmail);
        localStorage.setItem('id', this.resEmail.id_u);
        this.router.navigate(['/user']);
      })
    });
  }

}

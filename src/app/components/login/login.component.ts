import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginform!: FormGroup; 

  constructor(
    private router: Router,
    private fb: FormBuilder,  
    private serviceUser:UserService
  ) { }


  ngOnInit(): void {
    this.loginform=this.fb.group({
      email:[''],
      password:['']
    })
  }

  signUp(){
    this.router.navigate(["/signup"]);
  }

  login(){
    let postData=this.loginform.value
    this.serviceUser.loginUser(postData).subscribe((Resp:any)=>{
      if(Resp && Resp?.token){
        localStorage.setItem('token',JSON.stringify(Resp.token));
        this.router.navigate(['/home'])
      }
    })
  }

}

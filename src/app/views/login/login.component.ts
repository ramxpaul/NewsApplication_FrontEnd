import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reporters:any
  token:any
  emailUsed:boolean=false
  constructor(private authService:AuthService ,private router:Router) { }

  login(myForm:any){
   this.authService.login(myForm).subscribe((res)=>{
   this.reporters=res
   this.token=this.reporters.token
   localStorage.setItem('token',this.token)
   this.router.navigate(['/profile'])
   },(HttpError)=>{
     console.log(HttpError)
      this.emailUsed=true
   })
  }
  ngOnInit(): void {
  }

}

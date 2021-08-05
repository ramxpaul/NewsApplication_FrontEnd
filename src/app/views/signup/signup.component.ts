import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reporters:any
  token:any
  emailUsed:boolean=false
  constructor(private authService:AuthService , private router:Router) { }

  signUp(myForm:any){
    this.authService.signUp(myForm).subscribe((res)=>{
      this.reporters=res
      this.token=this.reporters.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      // console.log(httpError.error.name)
      if(httpError.error.name=="MongoError")
      {
        this.emailUsed=true
      }
    })
  }

  ngOnInit(): void {
  }

}

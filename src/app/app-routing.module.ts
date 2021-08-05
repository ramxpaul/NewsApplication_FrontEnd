import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AboutComponent } from './views/about/about.component';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { EditnewsComponent } from './views/editnews/editnews.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent,canActivate:[AuthGuardService]},
  {path:'addnews',component:AddnewsComponent,canActivate:[AuthGuardService]},
  {path:'editnews/:id',component:EditnewsComponent,canActivate:[AuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

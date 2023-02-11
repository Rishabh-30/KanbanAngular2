import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CheckOtpComponent } from './components/check-otp/check-otp.component'; 
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'home-page',
    component:HomePageComponent
  },
  {
    path:'check-otp',
    component:CheckOtpComponent
  },
  {
    path:'set-new-password',
    component:SetNewPasswordComponent
  },
  {
  path:'register',
  component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'home-page',
    pathMatch:'full'

  },
  {
    path:'admin',
    // canActivate:[AuthGuard],
    loadChildren:() => import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

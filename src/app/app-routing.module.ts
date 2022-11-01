import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { RingPageComponent } from './ring-page/ring-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'ring/:id', component:RingPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path: 'login-page', component:LoginPageComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'contact-page', component:ContactPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

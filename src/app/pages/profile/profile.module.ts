import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';

const routes:Routes =[
  {path:'', component:ProfileComponent}
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }

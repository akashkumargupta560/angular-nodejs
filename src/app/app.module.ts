import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './pages/profile/profile.module';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

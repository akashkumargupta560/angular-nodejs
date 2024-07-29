import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'', redirectTo:'/dashboard', pathMatch:'full'},

  {
    path:'dashboard',
    loadChildren:()=> import('./pages/dashboard/dashboard.module').then((m) =>m.DashboardModule)
  },
  {
    path:'about',
    loadChildren:() => import('./pages/about/about.module').then((m) =>m.AboutModule)
  },
  {
    path:'profile',
    loadChildren:() => import('./pages/profile/profile.module').then((m) =>m.ProfileModule)
  },
  {
    path:'home',
    loadChildren:() => import('./pages/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

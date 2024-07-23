import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  // {
  //   path:'',
  //   component:
  
  {
    path:'',
    loadChildren:()=> import('./pages/dashboard/dashboard.module').then((m) =>m.DashboardModule)
  },
  {
    path:'home',
    loadChildren:() => import('./pages/about/about.module').then((m) =>m.AboutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
   { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent,canActivate:[AuthGuard] },
  {path:"**",component:HomeComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

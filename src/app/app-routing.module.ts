import { EditorComponent } from './editor/editor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginActivateGuard } from './login-activate.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginActivateGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoginActivateGuard]
  },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [LoginActivateGuard]
  },
  {
    path: 'editor/:id',
    component: EditorComponent,
    canActivate: [LoginActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstViewComponent } from './features/first-view/first-view.component';
import { StartComponent } from './features/start/start.component';
import { RegisterComponent } from './features/register/register.component';
import { LogginComponent } from './features/loggin/loggin.component';


const routes: Routes = [
  {
    path: '',
    component: FirstViewComponent
  },
  {
    path: 'inicio',
    component: StartComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'logueo',
    component: LogginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

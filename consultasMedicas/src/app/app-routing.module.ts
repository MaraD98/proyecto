import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstViewComponent } from './features/first-view/first-view.component';
import { StartComponent } from './features/start/start.component';
import { RegisterComponent } from './features/register/register.component';
import { LogginComponent } from './features/loggin/loggin.component';
import { CallComponent } from './features/call/call.component';
import { LoadComponent } from './features/load/load.component';
import { PayComponent } from './features/pay/pay.component';


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
  {
    path: 'llamada',
    component: CallComponent
  },
  {
    path: 'carga',
    component: LoadComponent
  },
  {
    path: 'pagar',
    component: PayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

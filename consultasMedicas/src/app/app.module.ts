import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './features/first-view/first-view.component';
import { FooterComponent } from './features/footer/footer.component';
import { LogginComponent } from './features/loggin/loggin.component';
import { RegisterComponent } from './features/register/register.component';
import { StartComponent } from './features/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    FooterComponent,
    LogginComponent,
    RegisterComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

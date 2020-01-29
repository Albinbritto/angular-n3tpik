import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AddUser} from './AddUser/add-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {
      path:'',
      component:AddUser
    }
  ]) ],
  declarations: [ AppComponent, HelloComponent ,AddUser],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersListModule} from 'src/app/usersList/usersList.module'
import {UsersService} from './services/users.service'
import {LoginModule} from 'src/app/login/login.module'
import {RegisterModule} from 'src/app/register/register.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule,
    LoginModule,
    RegisterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

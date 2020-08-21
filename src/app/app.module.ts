import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersListModule} from 'src/app/usersList/usersList.module'
import {UsersService} from './services/users.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UsersListModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

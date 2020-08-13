import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersListModule} from 'src/app/usersList/usersList.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

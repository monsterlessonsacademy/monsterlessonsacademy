import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentUserService } from './currentUser.service';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FooComponent],
  providers: [CurrentUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

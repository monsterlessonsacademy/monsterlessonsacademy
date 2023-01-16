import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { CurrentUserService } from './currentUser.service';
import { PrivateModule } from './private/private.module';
import { UsersTableModule } from './usersTable/usersTable.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrivateModule,
    UsersTableModule,
  ],
  bootstrap: [AppComponent],
  providers: [CurrentUserService, AuthGuardService],
})
export class AppModule {}

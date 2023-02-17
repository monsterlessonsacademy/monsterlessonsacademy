import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';

export interface UsersServiceConfigInterface {
  apiUrl: string;
}

export const USERS_SERVICE_TOKEN = new InjectionToken<UsersServiceConfigInterface>(
  ''
);
export const USERS_SERVICE_CONFIG_TOKEN = new InjectionToken<UsersService>('');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  // providers: [UsersService],
  // providers: [{ provide: UsersService, useClass: UsersService }],
  // providers: [{ provide: 'USERS_SERVICE', useClass: UsersService }],
  providers: [
    { provide: USERS_SERVICE_TOKEN, useClass: UsersService },
    {
      provide: USERS_SERVICE_CONFIG_TOKEN,
      useValue: { apiUrl: 'http://localhost:3004/users' },
    },
  ],
})
export class AppModule {}

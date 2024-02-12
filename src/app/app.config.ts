import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrMWllnn-wV7R_xtGrgvGI_RiCxXWxbUw',
  authDomain: 'angular-firebase-app-aaafe.firebaseapp.com',
  projectId: 'angular-firebase-app-aaafe',
  storageBucket: 'angular-firebase-app-aaafe.appspot.com',
  messagingSenderId: '245645208814',
  appId: '1:245645208814:web:4ae53fedf70e9115ce17ff',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],
};

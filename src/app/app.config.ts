import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPuajm0ySx9r-ycltiycgiDjq7jeUwpbE',
  authDomain: 'authtest-75921.firebaseapp.com',
  projectId: 'authtest-75921',
  storageBucket: 'authtest-75921.appspot.com',
  messagingSenderId: '777213774593',
  appId: '1:777213774593:web:89d01c100bf4e7048d2900',
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

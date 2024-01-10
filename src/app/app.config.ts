import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyD1j_JFh4hdZ4sgXZKaoCQvJQXGvsWUZ6E',
  authDomain: 'angular-app-bd2cc.firebaseapp.com',
  projectId: 'angular-app-bd2cc',
  storageBucket: 'angular-app-bd2cc.appspot.com',
  messagingSenderId: '454339564675',
  appId: '1:454339564675:web:a0f9b25b4b3ed8c84d77b6',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};

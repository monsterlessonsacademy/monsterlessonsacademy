import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyCutXiHV_k6wM8DKzQjNNiVkqzixKJ2ruQ',
  authDomain: 'angular-todo-26dfc.firebaseapp.com',
  projectId: 'angular-todo-26dfc',
  storageBucket: 'angular-todo-26dfc.appspot.com',
  messagingSenderId: '520833002805',
  appId: '1:520833002805:web:86c50ebdfa0cb84c35f07c',
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};

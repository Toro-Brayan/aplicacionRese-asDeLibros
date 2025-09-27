import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),       // 👈 activa el router
    provideHttpClient(),         // 👈 habilita HttpClient para servicios
    importProvidersFrom(FormsModule) // 👈 habilita ngModel en inputs
  ]
};

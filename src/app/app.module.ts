import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsComponent } from './forms/forms.component';
import { NgFor } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SettingsComponent} from "./settings/settings.component"

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NotesComponent } from './notes/notes.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component"
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AppSharedComponentsModule} from './shared/common.module'

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18s/', '.json');
}

@NgModule({
  declarations: [AppComponent, FormsComponent, NotesComponent, ContactCardComponent, SettingsComponent, PrivacyPolicyComponent, ForgotPasswordComponent, TermsOfServiceComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AppSharedComponentsModule,
    // Инициализация базы данных
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    NgFor, 
    HttpClientModule,
    TranslateModule.forRoot({ 
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


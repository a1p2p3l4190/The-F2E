import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CommonPageComponent } from './components/common-page/common-page.component';
import { AdvocatePageComponent } from './components/advocate-page/advocate-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { PolicyPageComponent } from './components/policy-page/policy-page.component';
import { DonationPageComponent } from './components/donation-page/donation-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CommonPageComponent,
    AdvocatePageComponent,
    EventsPageComponent,
    PolicyPageComponent,
    DonationPageComponent,
    FormPageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

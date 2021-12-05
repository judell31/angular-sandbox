import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "./material.module";
import {NavComponent} from './components/nav/nav.component';
import {InvalidFormComponent} from './dialogs/errors/invalid-form/invalid-form.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormSubmittedComponent} from './dialogs/success/form-submitted/form-submitted.component';
import {AboutComponent} from './components/about/about.component';
import {NavMenu} from "./models/navMenu";
import {ContactComponent} from './components/contact/contact.component';
import {LazyUiModule} from "lazy-ui";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InvalidFormComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    FormSubmittedComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LazyUiModule,
    MaterialModule,
  ],
  providers: [NavMenu],
  bootstrap: [AppComponent]
})
export class AppModule { }

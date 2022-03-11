import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "./material.module";
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SuccessDialogComponent} from './components/shared/dialogs/success/success-dialog/success.dialog.component';
import {AboutComponent} from './components/about/about.component';
import {NavMenu} from "./models/navMenu";
import {HttpClientModule} from "@angular/common/http";
import {LazyUiModule} from "@jaytech/lazy-ui";
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SuccessDialogComponent,
    AboutComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LazyUiModule
  ],
  providers: [NavMenu],
  bootstrap: [AppComponent]
})
export class AppModule { }

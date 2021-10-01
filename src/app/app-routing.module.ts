import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {Guard} from "./services/guard";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
  providers: [Guard]
})
export class AppRoutingModule { }

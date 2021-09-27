import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PathGuard} from "./services/path.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [PathGuard]},
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
  providers: [PathGuard]
})
export class AppRoutingModule { }

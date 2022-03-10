import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from "./components/about/about.component";
import {Guard} from "./services/guard";

const routes: Routes = [
  {path: "", redirectTo: "ng-material", pathMatch: "full"},
  { path: 'ng-material', pathMatch: 'full', component: HomeComponent},
  { path: 'bootstrap-grid', pathMatch: 'full', component: AboutComponent },
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

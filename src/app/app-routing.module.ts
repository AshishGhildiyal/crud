import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CrudeComponent } from './crude/crude.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';

const routes: Routes = [
  { path: 'crude', component: CrudeComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

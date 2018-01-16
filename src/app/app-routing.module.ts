import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LandingComponent,
  PhoneBookComponent,
  PageNotFoundComponent
} from './components';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'phone-book', component: PhoneBookComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

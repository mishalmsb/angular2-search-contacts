import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import {
  PageNotFoundComponent,
  TopNavComponent,
  LandingComponent,
  PhoneBookComponent
} from './components';

// Services
import { PhoneBookService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TopNavComponent,
    LandingComponent,
    PhoneBookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PhoneBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

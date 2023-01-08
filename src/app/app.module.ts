import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { EuropaComponent } from './europa/europa.component';
import { ReszletesAdatokComponent } from './reszletes-adatok/reszletes-adatok.component';
import { VilaggazdasagComponent } from './vilaggazdasag/vilaggazdasag.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EuropaComponent,
    ReszletesAdatokComponent,
    VilaggazdasagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropaComponent } from './europa/europa.component';
import { IndexComponent } from './index/index.component';
import { ReszletesAdatokComponent } from './reszletes-adatok/reszletes-adatok.component';
import { VilaggazdasagComponent } from './vilaggazdasag/vilaggazdasag.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'europa', component: EuropaComponent },
  { path: 'reszletes-adatok', component: ReszletesAdatokComponent },
  { path: 'vilaggazdasag', component: VilaggazdasagComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
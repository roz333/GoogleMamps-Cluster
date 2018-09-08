import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppendixAService } from './shared/services/appendix-a.service';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OrderPipe } from 'ngx-order-pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    OrderPipe,
     HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmJsMarkerClustererModule
  ],
   exports: [OrderPipe],
  providers: [AppendixAService, OrderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

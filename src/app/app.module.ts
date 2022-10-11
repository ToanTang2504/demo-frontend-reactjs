import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaSectionSliderComponent } from './spa-section-slider/spa-section-slider.component';
import { SpaSectionContentComponent } from './spa-section-content/spa-section-content.component';
import { SpaSectionFooterComponent } from './spa-section-footer/spa-section-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpaHeaderComponent,
    SpaSectionSliderComponent,
    SpaSectionContentComponent,
    SpaSectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

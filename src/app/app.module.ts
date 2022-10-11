import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaHeaderComponent } from './components/spa-header/spa-header.component';
import { SpaSectionSliderComponent } from './components/spa-section-slider/spa-section-slider.component';
import { SpaSectionContentComponent } from './components/spa-section-content/spa-section-content.component';
import { SpaSectionFooterComponent } from './components/spa-section-footer/spa-section-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaService } from './services/spa.service';
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SpaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

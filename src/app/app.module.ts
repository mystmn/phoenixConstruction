import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { SliderComponent } from './view/module/slider/slider.component';
import { WeAreComponent } from './content/we-are/we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    WeAreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

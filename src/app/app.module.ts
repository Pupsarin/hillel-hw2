import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHotelsComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppHotelsComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppHotelsComponent]
})
export class AppModule { }

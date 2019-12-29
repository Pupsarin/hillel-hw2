import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHotelsComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { HotelItemComponent } from './list/hotel-item/hotel-item.component';
import { FormatPhonePipe } from './list/pipes/format-phone.pipe';

@NgModule({
  declarations: [
    AppHotelsComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    HeaderComponent,
    HotelItemComponent,
    FormatPhonePipe,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppHotelsComponent]
})
export class AppModule { }

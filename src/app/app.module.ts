import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHotelsComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelListItemComponent } from './hotel-list-item/hotel-list-item.component';

@NgModule({
	declarations: [
		AppHotelsComponent,
		WeatherComponent,
		ProfileComponent,
		HeaderComponent,
		FormatPhonePipe,
		HotelListComponent,
		HotelListItemComponent,
	],
	imports: [BrowserModule, NoopAnimationsModule, SharedModule],
	providers: [],
	bootstrap: [AppHotelsComponent],
})
export class AppModule {}

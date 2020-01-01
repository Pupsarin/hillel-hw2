import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppHotelsComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelListItemComponent } from './hotel-list-item/hotel-list-item.component';
import { FilterHotelsPipe } from './pipes/filter-hotels.pipe';
import { FilterStarsPipe } from './pipes/filter-stars.pipe';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';

@NgModule({
	declarations: [
		AppHotelsComponent,
		WeatherComponent,
		ProfileComponent,
		HeaderComponent,
		FormatPhonePipe,
		HotelListComponent,
		HotelListItemComponent,
		FilterHotelsPipe,
		FilterStarsPipe,
		FavoriteHotelsComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule, FormsModule],
	providers: [],
	bootstrap: [AppHotelsComponent],
})
export class AppModule {}

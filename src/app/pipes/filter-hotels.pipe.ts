import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Pipe({
	name: 'filterHotels',
})
export class FilterHotelsPipe implements PipeTransform {
	transform(hotels: IHotel[], searchText: string): IHotel[] {
		if (searchText) {
			return hotels.filter((hotel: IHotel): boolean => `${hotel.title}${hotel.description}`.toLowerCase().includes(searchText));
		}
		return hotels;
	}
}

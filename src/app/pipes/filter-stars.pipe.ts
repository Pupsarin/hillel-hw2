import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Pipe({
	name: 'filterStars',
})
export class FilterStarsPipe implements PipeTransform {
	transform(hotels: IHotel[], stars: number): IHotel[] {
		if (stars) {
			return hotels.filter((hotel: IHotel): boolean => hotel.stars == stars);
		}
		return hotels;
	}
}

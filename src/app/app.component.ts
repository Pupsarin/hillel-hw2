import { Component } from '@angular/core';
import { IHotel } from './shared/interfaces/IHotel';
@Component({
	selector: 'app-hotels',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppHotelsComponent {
	public title = 'hillel-hw2';
	public activeHotelId = 0;
	public hotels: IHotel[] = [
		{
			id: 0,
			title: 'Universal Cabana',
			address: 'Orlando',
			description: 'Best one!',
			phone: '+3242353434',
			picture: 'assets/images/1.jpg',
			photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
			weather: {
				temperature: 12,
				wind: 11,
				icon: 'sun',
			},
			profile: {
				followers: 112,
				following: 11,
				photo: 'assets/images/b1.jpg',
			},
			stars: 3,
		},
		{
			id: 1,
			title: 'Kharkov plaza',
			address: 'Kharkov',
			description: 'Five Stars',
			phone: '+3242353434',
			picture: 'assets/images/2.jpg',
			photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
			weather: {
				temperature: 5,
				wind: 4,
				icon: 'rain',
			},
			profile: {
				followers: 12,
				following: 111,
				photo: 'assets/images/b2.jpg',
			},
			stars: 4,
		},
		{
			id: 2,
			title: 'Hotel name',
			address: 'Orlando',
			description: 'Lorem ipson0',
			phone: '+3242353434',
			picture: 'assets/images/3.jpg',
			photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
			weather: {
				temperature: -2,
				wind: 2,
				icon: 'cloud',
			},
			profile: {
				followers: 45,
				following: 78,
				photo: 'assets/images/b3.jpg',
			},
			stars: 5,
		},
	];

	public favHotels = new Set();

	public activeHotel: IHotel = this.filterHotels(this.activeHotelId);

	public filterHotels(id: number, hotels: IHotel[] = this.hotels): IHotel {
		return hotels.filter(hotel => hotel.id === id)[0];
	}

	public selectActiveHotel($event: number): void {
		this.activeHotelId = $event;
		this.activeHotel = this.filterHotels(this.activeHotelId);
	}

	public handleAddFav($event: IHotel): void {
		this.favHotels.add($event);
	}

	public handleDelFav($event: IHotel): void {
		this.favHotels.delete($event);
	}
}

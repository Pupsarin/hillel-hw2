import { Component, OnInit } from '@angular/core';
import { IHotel } from './shared/interfaces/IHotel';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
	selector: 'app-hotels',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppHotelsComponent implements OnInit {
	constructor(private _snackBar: MatSnackBar) {}
	public title = 'hillel-hw2';
	public activeHotelId = -1;
	public favHotels: Set<IHotel> = new Set();
	public hotels: IHotel[] = [
		{
			id: -1,
			title: '',
			address: '',
			description: '',
			phone: '',
			picture: '',
			photos: [''],
			weather: {
				temperature: 0,
				wind: 0,
				icon: '',
			},
			profile: {
				followers: 0,
				following: 0,
				photo: '',
			},
			stars: 0,
		},
	];
	public activeHotel: IHotel = this.filterHotels(this.activeHotelId);

	public filterHotels(id: number, hotels: IHotel[] = this.hotels): IHotel {
		return hotels.filter(hotel => hotel.id === id)[0];
	}

	public selectActiveHotel($event: number): void {
		this.activeHotelId = $event;
		this.activeHotel = this.filterHotels(this.activeHotelId);
	}

	public handleAddFav($event: IHotel): void {
		if (!this.favHotels.has($event)) {
			this.favHotels.add($event);
			this._snackBar.open(`"${$event.title}" added to favorites!`, 'Close', {
				duration: 3000,
			});
		} else {
			this._snackBar.open(`"${$event.title}" already in favorites.`, 'Close', {
				duration: 3000,
			});
		}
	}

	public handleDelFav($event: IHotel): void {
		this.favHotels.delete($event);
		this._snackBar.open(`"${$event.title}" removed from favorites.`, 'Close', {
			duration: 3000,
		});
	}

	ngOnInit() {
		setTimeout(() => {
			this.hotels = [
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
			this.activeHotelId = this.hotels[0].id;
			this.selectActiveHotel(this.activeHotelId);
		}, 3000);
	}
}

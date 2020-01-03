import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Component({
	selector: 'app-favorite-hotels',
	templateUrl: './favorite-hotels.component.html',
	styleUrls: ['./favorite-hotels.component.scss'],
})
export class FavoriteHotelsComponent implements OnInit {
	constructor() {}

	@Input()
	public hotels: Set<IHotel>;

	@Output()
	public favEvent = new EventEmitter<IHotel>();

	public pushFav($event) {
		this.favEvent.emit($event);
	}

	ngOnInit() {}
}

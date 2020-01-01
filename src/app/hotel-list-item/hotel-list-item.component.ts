import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Component({
	selector: 'app-hotel-list-item',
	templateUrl: './hotel-list-item.component.html',
	styleUrls: ['./hotel-list-item.component.scss'],
})
export class HotelListItemComponent implements OnInit {
	constructor() {}

	@Input() public hotel: IHotel;
	@Input() public mainList: boolean;

	@Output() selectedHotel = new EventEmitter<number>();
	@Output() favHotel = new EventEmitter<IHotel>();

	public selectHotel(val: number) {
		this.selectedHotel.emit(val);
	}

	public handleFavs(hotel: IHotel) {
		this.favHotel.emit(hotel);
	}

	ngOnInit() {}
}

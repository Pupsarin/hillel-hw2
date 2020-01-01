import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit {
	constructor() {}

	@Input()
	public hotels: IHotel[];

	@Output()
	public listEvent = new EventEmitter();

	ngOnInit() {}

	public pushEventUp($event) {
		this.listEvent.emit($event);
	}
}

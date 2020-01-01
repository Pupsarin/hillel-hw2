import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class HotelListComponent implements OnInit {
	constructor() {}

	@Input()
	public hotels: IHotel[];

	@Output() public listEvent = new EventEmitter();
	@Output() public favEventHotelList = new EventEmitter<IHotel>();

	ngOnInit() {}

	public pushEventUp($event) {
		this.listEvent.emit($event);
	}

	public favEventHotelListHandler($event) {
		this.favEventHotelList.emit($event);
	}
}

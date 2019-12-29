import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../../shared/interfaces/IHotel';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {
  constructor() { }

  @Input()
  public hotel: IHotel;

  @Output()
  selectedHotel = new EventEmitter<number>();

  public selectHotel(val: number) {
    this.selectedHotel.emit(val);
  }

  ngOnInit() {

  }

}

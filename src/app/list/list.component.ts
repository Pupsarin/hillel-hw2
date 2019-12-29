import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../shared/interfaces/IHotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  public hotels: IHotel[];

  @Output()
  public listEvent = new EventEmitter();

  ngOnInit() {
  }

  public pushEventUp($event) {
    this.listEvent.emit($event);
  }
}

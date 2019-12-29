import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '../shared/interfaces/IWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input()
  public weather: IWeather;

  ngOnInit() {
  }

}

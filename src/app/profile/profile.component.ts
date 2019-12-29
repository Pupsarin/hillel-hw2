import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../shared/interfaces/IProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  @Input()
  public profile: IProfile;

  ngOnInit() {
  }

}

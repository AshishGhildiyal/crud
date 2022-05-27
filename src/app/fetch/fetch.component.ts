import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from '../fetchservice.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent implements OnInit {
  userdata: any = [];

  constructor(private _FetchserviceService: FetchserviceService) {
    this._FetchserviceService.getUserData().subscribe((takedata) => {
      this.userdata = takedata;
    });
  }

  ngOnInit(): void {}
}

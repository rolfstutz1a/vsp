import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TransportService } from '../transport.service';

@Component({
  selector: 'vsp-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent implements OnInit {

  searchStations: FormControl = new FormControl();

  searchResult: any = [];

  constructor(private service: TransportService) {
    this.searchStations.valueChanges
      .subscribe(data => {
        this.service.searchStation(data).subscribe(response => {
          this.searchResult = response['stations'];
        });
      });
  }

  ngOnInit() {
  }

}

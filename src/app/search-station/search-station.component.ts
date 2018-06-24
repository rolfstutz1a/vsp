import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vsp-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent implements OnInit {

  stations: Object;

  constructor(private transport: TransportService) { }

  ngOnInit() {
  }

}

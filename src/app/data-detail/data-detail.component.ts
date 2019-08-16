import { Component, OnInit, Input } from '@angular/core';
import {Data} from '../models/Data';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  @Input() dataDetails: Data;

  constructor() { }

  ngOnInit() {
  }

}

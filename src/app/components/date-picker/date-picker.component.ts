import { Component, OnInit } from '@angular/core';
import {formatDate, Time} from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  today: string;
  constructor() { }

  ngOnInit() {
  }
  registerDate() {
    console.log(this.today = (formatDate(new Date(), 'HH:MM:ss:SSS', 'en-UK', '0')));
  }

}

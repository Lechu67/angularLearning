import { Component, OnInit } from '@angular/core';
import {formatDate, Time} from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  startDate: Date;
  today: string;
  constructor() { }

  ngOnInit() {
  }
  registerDateOld() {
    console.log(this.today = (formatDate(new Date(), 'HH:MM:ss:SSS', 'en-UK', '0')));
  }
  registerDate(): Date {
    this.startDate = new Date();
    this.today = (formatDate(this.startDate, 'HH:MM:ss:SSS', 'en-UK', '0'));
    return this.startDate;
  }

}

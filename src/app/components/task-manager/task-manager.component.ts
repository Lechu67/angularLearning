import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import {AjaxService} from '../../services/ajax.service';
import {Data} from '../../models/Data';
import {DatePickerComponent} from '../date-picker/date-picker.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  data: Data[]
  startDate: Date;
  diff: number;
  constructor(private ajax: AjaxService,
              private datePicker: DatePickerComponent) { }

  ngOnInit() {
  }
  run() {
    this.startDate = this.datePicker.registerDate();
    this.ajax.getData().subscribe(data => {
      this.data = data;
    });
    const anotherData = this.data.reverse();
    this.data = this.data.concat(anotherData);
    this.calculateTime();
  }

  calculateTime() {
    this.diff = new Date().getTime() - this.startDate.getTime();
    console.log(this.diff);
  }

}

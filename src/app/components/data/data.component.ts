import {Component, OnInit} from '@angular/core';
import {Data} from '../../models/Data';
import {AjaxService} from '../../services/ajax.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: Data[];
  selectedData: Data;

  constructor(private ajax: AjaxService) {
  }

  ngOnInit() {
    this.ajax.getData().subscribe(data => {
      this.data = data;
    });
  }
  onSelect(data: Data): void {
    this.selectedData = data;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/Data';
import {Observable} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  serverUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  limit: string = '?_limit=500';


  constructor(private http: HttpClient, private messageService: MessageService) { }

  getData(): Observable<Data[]> {
    this.messageService.add('All data are fetched');
    return this.http.get<Data[]>(this.serverUrl + this.limit);
  }
}

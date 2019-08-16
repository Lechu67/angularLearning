import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import {TaskManagerComponent} from './components/task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DataComponent,
    DataDetailComponent,
    MessagesComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatePickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

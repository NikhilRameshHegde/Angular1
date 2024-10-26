import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { AkatsukiComponent } from './akatsuki/akatsuki.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AkatsukiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

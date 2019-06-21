import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //方式四 接管API
import {InMemoryDataService} from './in-memory-data.service';//方式四 接管API

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(//方式四 接管API
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

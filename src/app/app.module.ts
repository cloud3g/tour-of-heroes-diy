import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // 根组件
import { HeroesComponent } from './heroes/heroes.component'; // 页面组件

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // 方式四 接管API 注释三个地方
import {InMemoryDataService} from './in-memory-data.service'; // 方式四 接管API 注释三个地方

@NgModule({
  // 哪些组件属于该模块
  declarations: [
    AppComponent,
    HeroesComponent
  ],

  // 导入 各种模块 以获取特有的服务支持
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(// 方式四 接管API 注释三个地方
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  // 各种服务提供商
  providers: [],

  // 根组件
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RibbonBarComponent } from './components/ribbon-bar/ribbon-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DigramComponent } from './components/digram/digram.component';
import {MatIconModule} from '@angular/material/icon';
import { NavBarButtonComponent } from './ui/nav-bar-button/nav-bar-button.component';
import { RibbonButtonComponent } from './ui/ribbon-button/ribbon-button.component';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RibbonBarComponent,
    SideBarComponent,
    DigramComponent,
    NavBarButtonComponent,
    RibbonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    DndModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

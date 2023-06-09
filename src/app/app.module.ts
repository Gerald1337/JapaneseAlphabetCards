import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { FlashCardScreenComponent } from './views/flash-card-screen/flash-card-screen.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashCardScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

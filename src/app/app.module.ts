import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TravelOptionsComponent } from './travel-option/travel-option.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        TravelOptionsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BookingFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
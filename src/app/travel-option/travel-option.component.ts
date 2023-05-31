import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TravelOption {
  name: string;
  vehicleType: string;
  pricePerPassenger: number;
}

@Component({
  selector: 'app-travel-options',
  templateUrl: './travel-option.component.html',
  styleUrls: ['./travel-option.component.css']
})
export class TravelOptionsComponent {
  travelOptions: TravelOption[] = [];
  totalListings: number = 1;
  minPrice: number = 1;
  maxPrice: number = 1;
  avgPrice: number = 1;

  // constructor(private http: HttpClient) { }

  constructor(private http: HttpClient) {
    this.http.get<any>('https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest').subscribe(data => {
      this.travelOptions = data.travelOptions.sort((a: any, b: any) => a.pricePerPassenger - b.pricePerPassenger);
      this.totalListings = data.totalListings;
      this.minPrice = data.minPrice;
      this.maxPrice = data.maxPrice;
      this.avgPrice = data.avgPrice;
    });
  }
}
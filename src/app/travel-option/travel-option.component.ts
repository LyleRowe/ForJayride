import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface listing {
  name: string;
  vehicleType: {
      name: string,
      maxPassengers: number
  };
  pricePerPassenger: number;
}


@Component({
  selector: 'app-travel-options',
  templateUrl: './travel-option.component.html',
  styleUrls: ['./travel-option.component.css']
})
export class TravelOptionsComponent implements OnInit{
  newlistings: listing[] = [];
  listings: listing[] = [];
  totalListings: number = 1;
  minPrice: number = 1;
  maxPrice: number = 1;
  avgPrice: number = 1;
  source: String = ""
  destination: String = ""

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getTravelOptions();
  }
  getTravelOptions() {
    this.http.get<any>('/api').subscribe(
      data => {
          console.log(data);
          this.listings = data.listings;
          this.newlistings = data.listings.filter((dict: listing) => dict.vehicleType.maxPassengers >= 3);
          this.totalListings = data.listings.length;
          this.source = data.from;
          this.destination = data.to;
          this.minPrice = Math.max(...this.listings.map((dict) => dict.pricePerPassenger));
          this.maxPrice = Math.min(...this.listings.map((dict) => dict.pricePerPassenger));
          this.avgPrice = this.listings.reduce((total, dict) => total + dict.pricePerPassenger, 0);
      });
  }
}

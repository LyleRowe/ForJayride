import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  imports: [ 
    FormsModule
  ],
  styleUrls: ['./booking-form.component.css'],
  standalone: true
})
export class BookingFormComponent {
  travellerName: string = '';
  travellerEmail: string = '';
  channel: string = '';
  meetAndGreetOption: boolean = false;
  travelDatetime: string = '';
  bookingPrice: number = 1;

  onSubmit() {
    console.log({
      travellerName: this.travellerName,
      travellerEmail: this.travellerEmail,
      channel: this.channel,
      meetAndGreetOption: this.meetAndGreetOption,
      travelDatetime: this.travelDatetime,
      bookingPrice: this.bookingPrice
    });
  }
}
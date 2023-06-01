import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
      this.myForm = this.fb.group({
        travellerName: ['', Validators.required],
        travellerEmail: ['', [Validators.required, Validators.email]],
        channel: ['', Validators.required],
        meetAndGreet: [false, Validators.required],
        travelDatetime: ['', Validators.required],
        bookingPrice: ['', Validators.required]
      })
  }

  onSubmit() {
    console.log(this.myForm?.value );
  }
}
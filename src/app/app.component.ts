import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';

  myReactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    Address: new FormArray([
      new FormControl('Addr1'),
    ]),
  });

  getAddressFromArray() {
    return this.myReactiveForm.get('Address') as FormArray;
  }

  addControlToAddress() {
    this.getAddressFromArray().push(new FormControl('Addr'));
  }
  removeAddress(index: number) {
    this.getAddressFromArray().removeAt(index);
  }

  handleValitade() {
    if (this.myReactiveForm.invalid) {
      window.alert('please fill all mandatory fields');
    }
    console.log(this.myReactiveForm.valid);
    console.log(this.myReactiveForm.value);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl("",[Validators.required]),
    phone_no:new FormControl('+91'),
    password:new FormControl(""),
    Address:new FormArray([
      new FormControl('Addr1'),
      new FormControl('Addr2')
    ])
  })

  getArray(){
    return this.myForm.get('Address') as FormArray;
  }

  addAddress(){
    this.getArray().push(new FormControl("Addr"))
  }
  removeAddress(index: number) {
    this.getArray().removeAt(index);
  }

  handleSubmit(){
    if(this.myForm.invalid){
      window.alert("Fill the form wih correect values")
    }
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
  }

}

import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  profileForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    password: ['', Validators.required ],
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private formBuilder: FormBuilder) {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  devs: Number = 1;
  pubs: Number = 1;

  gameForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    developers: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    publishers: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.gameForm.value);
  }
}

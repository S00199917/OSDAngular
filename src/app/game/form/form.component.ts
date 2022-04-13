import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/game';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() game!: Game;
  @Output() gameFormClose = new EventEmitter<Game>();
  gameForm!: FormGroup;

  
  

  constructor() { }

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      name: new FormControl(this.game?.name, [Validators.required, Validators.maxLength(50)]),
      developers: new FormControl(this.game?.developers, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      publishers: new FormControl(this.game?.publishers, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      description: new FormControl(this.game?.description, [Validators.required, Validators.maxLength(500)]),
      image: new FormControl(this.game?.image, [Validators.required])
    })
  }

  // get name() {
  //   return this.gameForm?.get('name')
  // }

  // get developers() {
  //   return this.gameForm?.get('developers')
  // }

  // get publishers() {
  //   return this.gameForm?.get('publishers')
  // }

  // get description() {
  //   return this.gameForm?.get('description')
  // }  

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.gameForm?.value);
    this.gameFormClose.emit(this.gameForm?.value)
  }
}
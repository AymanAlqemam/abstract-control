import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UsernameValidator } from './user.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form:any
  title = 'control';
  constructor() {
    this.form = new FormGroup({
      username: new FormControl('',
      [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace, this.forbiddenName]),
      password: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    console.log(this.form.controls);
  }

  forbiddenName(control: AbstractControl) {
    if(control.value.includes("Ahmed")) {
      return {
        forbidden: {forbidden: "Ahmed"}
      }
    }
  }
}

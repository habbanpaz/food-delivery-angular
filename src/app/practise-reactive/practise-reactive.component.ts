import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practise-reactive',
  templateUrl: './practise-reactive.component.html',
  styleUrls: ['./practise-reactive.component.css']
})
export class PractiseReactiveComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    console.warn(this.loginForm)
  }

}

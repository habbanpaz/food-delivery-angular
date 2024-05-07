import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})

export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router) { }

  showLogin = false
  authError:string = ''
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }

  login(data: Login): void {
    this.authError=''
    this.seller.userLogin(data)
    this.seller.isSellerLoggedIn.subscribe((isError) => {
      if (isError) {
        this.authError="Email or password is incorrect "
      }
    })
  }

  openLogin() {
    this.showLogin = true
  }

  openSignup() {
    this.showLogin = false
  }

}

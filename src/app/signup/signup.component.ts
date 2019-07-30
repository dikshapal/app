
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {  HttpClientService,Submit } from 'app/services/http-client.service';



@Component({

selector: 'signup',

templateUrl: './signup.component.html',

styleUrls: ['./signup.component.css']

})

export class SignupComponent implements OnInit {

public signup :Submit=new Submit("","","","",null);


constructor(
  private httpClientService: HttpClientService,private router: Router) { }



ngOnInit() {

}



registeruser(): void {

console.log(this.signup);

this.httpClientService.registeruser(this.signup);

}
}



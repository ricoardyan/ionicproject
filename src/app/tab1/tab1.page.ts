import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router:Router
    ) {}

  btnClicked(){
    console.log("btn Clicked");
    this.router.navigateByUrl('itemdetails')
}

}
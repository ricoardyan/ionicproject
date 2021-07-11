import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.page.html',
  styleUrls: ['./itemdetails.page.scss'],
})
export class ItemdetailsPage implements OnInit {

  constructor(
    private router:Router
    ) {}

  btnBack(){
    console.log("btn Back");
    this.router.navigateByUrl('tab1')
}

btnCart(){
    console.log("btn Cart");
    this.router.navigateByUrl('cart')
}

  ngOnInit() {
  }

}

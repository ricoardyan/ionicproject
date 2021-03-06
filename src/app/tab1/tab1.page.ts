import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private items;
  private total : number = 0;
  private q: string = "";

  constructor(
    private http : HttpClient,
    private router:Router,
    
    ) {}

  showDetail(id_produk: any){
    this.router.navigate(["/itemdetails", id_produk]);
  }


  ionViewWillEnter(){
    this.showitems();
  }

  showitems() {
    let server_url = 'http://127.0.0.1:8000/api/produk?q=' + this.q;
    this.http.get(server_url).subscribe((res) =>{
      if (res) {
        this.items = res;
        this.total = this.items.length;
      }


      //alert('aku sayang kamu !');

    });
  }

}
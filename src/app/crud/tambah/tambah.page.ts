import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {

  id_produk: string = "";
  nama_produk: string = "";
  tipe_produk: string = "";
  stok: string = "";
  harga: string = "";
  gambar: string = "";
  status_produk: string = "";

  constructor(
    private http: HttpClient,
    private location: Location,
    ) { }

  ngOnInit() {
  }

  additem(){
  let server_url = 'http://127.0.0.1:8000/api/produk';
  let param = new FormData();
  param.append("id_produk", this.id_produk);
  param.append("nama_produk", this.nama_produk);
  param.append("tipe_produk", this.tipe_produk);
  param.append("stok", this.stok);
  param.append("harga", this.harga);
  param.append("gambar", this.gambar);
  param.append("status_produk", this.status_produk);

  this.http.post(server_url, param)
  .subscribe((res)=>{
    alert("MASUK MAN!!!");
    this.location.back();
  });

  }



}

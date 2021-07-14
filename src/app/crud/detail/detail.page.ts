import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id_produk: string;
  nama_produk: string;
  tipe_produk: string;
  stok: string;
  harga: string;
  gambar: string;
  status_produk: string;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.showDetail();
  }

  showDetail(){
    this.id_produk = this.router.snapshot.params.id_produk;

    let server_url = 'http://127.0.0.1:8000/api/produk/' + this.id_produk;
    this.http.get(server_url)
    .subscribe((res: any)=> {
      this.id_produk = res.id_produk;
      this.nama_produk = res.nama_produk;
      this.tipe_produk = res.tipe_produk;
      this.stok = res.stok;
      this.harga = res.harga;
      this.gambar = res.gambar;
      this.status_produk = res.status_produk;
    });
    
  }

}

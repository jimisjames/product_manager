import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  products: any

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    let observable = this._httpService.getProducts()
    observable.subscribe(data => {
      this.products = data["products"]
    })
  }

  delete(id){
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
      console.log(data)
      this.getProducts()
    })
  }
}

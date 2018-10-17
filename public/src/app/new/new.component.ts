import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ){}

  flash = null

  newProduct = {
    name: undefined,
    price: undefined,
    url: undefined
  }

  ngOnInit() {
  }

  create(){
    let observable = this._httpService.create(this.newProduct)
    observable.subscribe(data => {
      console.log(data)
      if(data['message'] == "Success"){
        this._router.navigate(['/products']);
      } else {
        this.flash = "required fields not satisfied"
      }
    })
  }

}

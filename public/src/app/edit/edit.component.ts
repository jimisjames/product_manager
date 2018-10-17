import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router
  ){}
  
  flash = null

  product = {
    id: "",
    name: "",
    price: 0,
    url: ""
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      
      let observable = this._httpService.getById(params['id'])
      observable.subscribe(data => {
        console.log(data)
        this.product = data["product"]
      })
    });
  }

  update(){
    if(this.product.name.length > 3 && this.product.price > 0 && this.product.url.length > 3){
      let observable = this._httpService.update(this.product)
      observable.subscribe(data => {
        console.log(data)
        if(data["message"] == "Success"){
          this._router.navigate(['/products']);
        }
      })
    } else {
      this.flash = "required fields not satisfied"
    }
  }
}

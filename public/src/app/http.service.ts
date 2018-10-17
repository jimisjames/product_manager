import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getProducts(){
    return this._http.get("/all")
  }

  create(data){
    return this._http.post("/", data)
  }

  delete(id){
    return this._http.delete("/" + id)
  }

  getById(id){
    return this._http.get("/blah/" + id)
  }

  update(data){
    return this._http.put("/", data)
  }
}

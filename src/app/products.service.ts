import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getProducts():Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products`);
  }
  getProductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}

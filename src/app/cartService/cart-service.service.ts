import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  getTotalPrice(): number {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("http://localhost:3000/product")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

import { Component, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/cartService/cart-item.service';
import { CartServiceService } from 'src/app/cartService/cart-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  public productList:any;
  constructor(private cartService:CartServiceService,private cartitemService:CartItemService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.productList=res;


      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
  addtocart(item:any){
    this.cartitemService.addtoCart(item);

  }

}

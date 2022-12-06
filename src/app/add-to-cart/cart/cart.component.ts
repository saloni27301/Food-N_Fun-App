import { Component, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/cartService/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal!:number;
  constructor(private cartitemService:CartItemService) { }

  ngOnInit(): void {
    this.cartitemService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartitemService.getTotalPrice();
    })
    
  }
  removeItem(item:any){
    this.cartitemService.removeCartItem(item);
  }
  emptycart(){
    this.cartitemService.removeAllCart();
  }
}

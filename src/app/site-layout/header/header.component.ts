import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from 'src/app/cartService/cart-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  showMe:boolean=true;
  constructor(private router:Router,private cartitemService:CartItemService) { }

  ngOnInit(): void {
    this.cartitemService.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  cartNavigate(){
    this.router.navigate(['//cart']);
  }
  about(){
    this.router.navigate(['//about']);
  }
  menu(){
    this.router.navigate(['//cart-product']);
  }
  home(){
    this.router.navigate(['//home']);
  }
  logout(){
    console.log("text");
    this.router.navigate(['//login']);
    this.showMe=!this.showMe;
    }
}

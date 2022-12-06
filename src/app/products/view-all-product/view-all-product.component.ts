import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productList:Product|any;
  productID: any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewProduct(this.productID).subscribe(data=>{
      this.productList=data;
    })
    this.productService.getProduct().subscribe(data=>{
      this.productList =data;
    })
  }

}

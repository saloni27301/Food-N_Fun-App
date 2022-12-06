import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from './category';

@Component({
  selector: 'app-side-baar',
  templateUrl: './side-baar.component.html',
  styleUrls: ['./side-baar.component.css']
})
export class SideBaarComponent implements OnInit {
  categoryList: Category | any; 

  constructor(private productsService:ProductService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList=data;
    })
  }

}

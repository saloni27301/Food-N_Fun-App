import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productID=0;
  productDetails:Product|any;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id'];


      this.productService.viewProduct(this.productID).subscribe(productData=>{
        this.productDetails=productData;
        console.log(this.productDetails);
      })
    })
  }

  updateProduct(form:any){
    const updateProduct={
          id: form.value.id,
          categoryId: form.value.categoryId,
          name: form.value.productName,
          description: form.value.description,
          rating: form.value.product_rating,
          price: form.value.product_price,
          productImg: form.value.product_Img,
          isAvailable: 1,
          // color: form.value.product_color,
          review: form.value.product_category,
    };
    console.log(form);
    this.productService.updateProduct(this.productID,updateProduct).subscribe(data=>{
      console.log(data)
    })
    if(this.productService) {
      alert('Updated Item  Successfully!!');
      // this.addNewProduct.call();
      this.router.navigate(['/products'])
    } else {
      alert("User not Found");
    }
  }

}

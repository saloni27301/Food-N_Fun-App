import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItemService } from '../cartService/cart-item.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;
  product: any = [];
  grandTotal!: number;
  constructor(
    private cartService: CartItemService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      // this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.checkoutForm = this.formBuilder.group({
      fullname: [''],
      mobile: [''],
      Address: [''],
      CityandState: [''],
    });
  }
  checkout() {
    this.http
      .post<any>('http://localhost:3000/checkout', this.checkoutForm.value)
      .subscribe(
        (res:any) => {
          alert('Form filled up successfully');
          this.checkoutForm.reset();
          this.router.navigate(['/home']);
          console.log()
        },
        (err:any) => {
          alert('Something went wrong');
        }
      );
  }
  

}

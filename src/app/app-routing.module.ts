import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartProductComponent } from './add-to-cart/cart-product/cart-product.component';
import { CartComponent } from './add-to-cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// import { ListOrderComponent } from './orders/list-order/list-order.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),component:ProductsComponent },
// {path:'order',component:ListOrderComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'products',component:ProductsComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'cart-product',component:CartProductComponent},
{path:'cart',component:CartComponent},
{path:'checkout',component:CheckoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

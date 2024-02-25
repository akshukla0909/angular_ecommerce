import { Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { AllProductComponent } from './component/pages/all-product/all-product.component';
import { OneProdComponent } from './component/pages/one-prod/one-prod.component';

export const routes: Routes = [
    {path : "", component : AllProductComponent},
    // {path : "product", redirectTo : ""},
    {path : "product/:id", component : OneProdComponent },
    {path : "cart", component : CartComponent }
];

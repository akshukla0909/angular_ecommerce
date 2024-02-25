import { Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [
    {path : "", component : ProductComponent},
    {path : "cart", component : CartComponent }
];

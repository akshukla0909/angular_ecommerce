import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ApiService } from './service/api.service';
import { CartComponent } from './component/cart/cart.component';
import { AllProductComponent } from './component/pages/all-product/all-product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AllProductComponent, CartComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'spa-app';

 
  product : any;
  // constructor(private productData : ApiService){
  //       this.productData.getAllProducts().subscribe((data)=>{
  //         this.productAll = data;
  //         // console.log(this.productAll);
  //       })
  // }

  data = 10; 
}

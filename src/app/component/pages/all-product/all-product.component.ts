import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-product.component.html',

})
export class AllProductComponent {
  public productList : any ;
   product : any;

  constructor(private productData : ApiService, private cartService : CartService){
        this.productData.getAllProducts().subscribe((data)=>{
          console.log(data);
          this.productList = data
        })
  }

  addToCart(product : any){
    this.cartService.addToCartEvent.emit(product)
    console.log('nice');
    
  }

  ngOnInit() : void{

  }

}

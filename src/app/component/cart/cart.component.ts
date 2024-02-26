import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent {
 
  public product : any [] = [] ;
  public grandTotal !: Number;

  constructor(private cartservice : CartService){}

  ngOnInit() : void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice()
      console.log(this.grandTotal);
      
    })
  }
  
  removeItem(product: any){
      this.cartservice.removeCartItem(product);
  }

  emptyCart(){
    this.cartservice.removeAllCart()
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
 
  cartItems : any [] = []

  constructor(private cartservice : CartService){}

  ngOnInit() : void{
        this.cartservice.addToCartEvent.subscribe((product: any)=>{
          this.cartItems.push(product)
          console.log(this.cartItems);
        })
  }

}

import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public prodList = new BehaviorSubject<any>([])

  // addToCartEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  getProducts(){
     return  this.prodList.asObservable();
  }

  setProducts(product : any){
        this.cartItemList.push(...product)
        this.prodList.next(product)
  }

  addToCart(product : any){
    this.cartItemList.push(product)
    this.prodList.next(this.cartItemList)
    this.getTotalPrice()
  }

  getTotalPrice() : Number{
    let grandTotal = 0
    this.cartItemList.map((a:any)=>{
          
          grandTotal += Number(a.price);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index : any)=>{
          if(product.id === a.id){
            this.cartItemList.splice(index, 1)
          }
    })
    this.prodList.next(this.cartItemList)
  }

  removeAllCart(){
    this.cartItemList = []
    this.prodList.next(this.cartItemList)
  }

}

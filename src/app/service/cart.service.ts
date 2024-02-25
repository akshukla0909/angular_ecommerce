import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCartEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}

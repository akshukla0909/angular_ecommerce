import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.component.html',
})
export class SuccessComponent {
  loading: boolean = true;

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    this.cartService.removeAllCart();
    }, 2500);
  }


}

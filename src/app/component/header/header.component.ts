import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  public totalItem : number = 0;
  constructor(private cartService : CartService){}

  ngOnInit() : void {
    this.cartService.getProducts()
    .subscribe(res=>{
        this.totalItem = res.length;
    })
  }

  getSearch(){
    console.log();
    
  }
}

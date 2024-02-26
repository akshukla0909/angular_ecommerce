import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-one-prod',
  standalone: true,
  imports: [],
  templateUrl: './one-prod.component.html',
})
export class OneProdComponent {
    prodId : any;
    productsData: any;


    constructor(private route: ActivatedRoute, private dataService : DataService, private cartService : CartService ){}

    ngOnInit(){
    this.prodId = Number(this.route.snapshot.paramMap.get('id'))
     
    this.dataService.productsData$.subscribe(data => {
      this.productsData = data.filter((prod : any) => prod.id === this.prodId);
      console.log(this.productsData);
    })
}

    addToCart(product : any){
      console.log("nice", product);
      this.cartService.addToCart(product)
    }


}

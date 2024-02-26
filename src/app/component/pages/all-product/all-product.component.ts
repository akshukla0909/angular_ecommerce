import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-product.component.html',

})
export class AllProductComponent {
  public productList : any ;
   product : any;

  constructor(private productData : ApiService){
        this.productData.getAllProducts().subscribe((data)=>{
          console.log(data);
          this.productList = data
        })
  }

}

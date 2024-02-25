import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // httpService = inject(ApiService)
  public productList : any ;
   product : any;
   
  constructor(private productData : ApiService){
        this.productData.getAllProducts().subscribe((data)=>{
          console.log(data);
          this.productList = data
          
        })
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'spa-app';
 
  product : any;
  constructor(private productData : ApiService){
        this.productData.getAllProducts().subscribe((data)=>{
          console.log(data);
          
        })
  }
}

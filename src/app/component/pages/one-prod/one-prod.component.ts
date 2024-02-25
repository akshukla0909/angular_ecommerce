import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-one-prod',
  standalone: true,
  imports: [],
  templateUrl: './one-prod.component.html',
})
export class OneProdComponent {
    prodId : any;
    productsData: any;


    constructor(private route: ActivatedRoute, private dataService : DataService){}

    ngOnInit(){
    this.prodId = Number(this.route.snapshot.paramMap.get('id'))
     
    this.dataService.productsData$.subscribe(data => {
      this.productsData = data.filter((prod : any) => prod.id === this.prodId);
      console.log(this.productsData);
    })


}}

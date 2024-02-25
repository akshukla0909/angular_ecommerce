import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsDataSubject = new BehaviorSubject<any>([]);
  productsData$ = this.productsDataSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.fetchProductsData();
  }

  private fetchProductsData() {
    this.apiService.getAllProducts().subscribe(data => {
      return this.productsDataSubject.next(data);
    });
  }
}

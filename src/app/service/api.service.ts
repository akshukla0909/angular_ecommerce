import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // httpClient = inject(HttpClient)

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http : HttpClient) { }

  // the HttpClient service returns observables for HTTP requests by default 

  getAllProducts(){
    return this.http.get(this.apiUrl)
  }

}

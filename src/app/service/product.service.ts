import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient) { }

    private url = 'https://localhost:44350/product/'; 

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url+'List')
    }

    getProductById(id : Number): Observable<Product> {
      return this.http.get<Product>(this.url+'FindById/?id='+id)
    }

}

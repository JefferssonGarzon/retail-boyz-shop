import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse } from '@products/interfaces/product.interface';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({providedIn: 'root'})
export class ProductService {
    private http = inject(HttpClient);
    
    getProducts(): Observable<ProductsResponse> {
        return this.http
            .get<ProductsResponse>(`${baseUrl}/products`)
            .pipe(
                tap((resp) => console.log(resp))
            );
    }
}
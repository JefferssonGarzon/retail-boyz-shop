import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '@products/services/product.service';
import { ProductCard } from '../../../products/components/product-card/product-card';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
})
export class HomePage {
  productService = inject(ProductService);

  productsResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => {
      return this.productService.getProducts();
    },
  });
}

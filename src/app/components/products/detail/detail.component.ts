import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  n: number = 1;
  product: any = JSON.parse(localStorage.getItem('productToDetail'));

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  plus() {
    if (this.n < this.product.estamp.QunatityEstampDisponible) this.n++;
  }

  moin() {
    if (this.n > 1) {
      this.n--;
    }
  }

  AjoutProductToCart(product: any) {
    let article = {
      productId: product._id,
      quantity: this.n,
      articleInfo: product,
    };
    console.log('article to cart is :', article);
    this.cartService.addToCartTemp(article);

    // this.cartService.addProductToCart(article).subscribe((res: any) => {
    //   //console.log("res is : ",res);
    // });
  }
}

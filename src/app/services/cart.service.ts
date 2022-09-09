import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public tempCartItems: any[] = [];
  constructor(private http: HttpClient, private messageService: MessageService) {}

  addToCartTemp(data: any) {
    let product = this.tempCartItems.find((produit) => produit.productId === data.productId);
    if (product === null || product === undefined) {
      this.tempCartItems.push(data);
    } else {
      product.quantity += data.quantity;
    }
    console.log(data);
    this.messageService.add({severity:'success', summary:'Panier', detail:'Produit ajouté avec succès'});

  }

  getAllQuantity() {
    let quantite = 0;
    this.tempCartItems.forEach((item) => quantite += item.quantity);
    return quantite;
  }

  addProductToCart(product: any) {
    console.log('here ajout article : ', product);

    return this.http.post(`${environment.baseURL}/Cart/addItem`, product);
  }

  getCartProduct() {
    return this.http.get(`${environment.baseURL}/Cart/getCart`);
  }

  deleteCart() {
    return this.http.delete(`${environment.baseURL}/Cart/empty-cart`);
  }

  deleteProductByIdCart(id: any) {
    return this.http.delete(
      `${environment.baseURL}/Cart/removeSingleProduct/${id}`
    );
  }
  deleteItmCart(ind: number) {
    let newList = this.tempCartItems.filter((item, index) => index !== ind);
    this.tempCartItems = newList;
  }
  clearCart() {
    this.tempCartItems = [];
  }
}

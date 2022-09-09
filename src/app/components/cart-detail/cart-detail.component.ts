import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  prixTotal: any;
  prix: any;
  quantite: any;
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51JdXf9DRYvhLYt7LKXzoEVUDlUQMXzXyDMHYKOEo0RRsLm6ZUYCfgPOaf6AH74OcyORolgD406J76HXvbnIPbLTD00XWoH3GaV';
  constructor(public cartServ: CartService) {}

  ngOnInit(): void {
    console.log('Cart Items', this.cartServ.tempCartItems);
    this.invokeStripe();
  }
  toNumber(text: string): number {
    return Number(text);
  }
  totalSum(items: any): number {
    let sum: number = 0;
    items.forEach((itm) => {
      sum = sum + itm.quantity * Number(itm.articleInfo.price);
    });
    return sum;
  }
  deleteItemCart(ind: number) {
    this.cartServ.deleteItmCart(ind);
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre commande à été effectuer avec success',
          showConfirmButton: false,
        }).then(() => {
          
        });
      },
    });
    paymentHandler.open({
      name: 'La Poste Tunisienne',
      description: 'Confirmation des achats',
      amount: amount * 100,
    });
    this.cartServ.clearCart();
  }

  /*------------------------------------------
  --------------------------------------------
  invokeStripe() Function
  --------------------------------------------
  --------------------------------------------*/
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}

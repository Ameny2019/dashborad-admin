import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51JdXf9DRYvhLYt7LKXzoEVUDlUQMXzXyDMHYKOEo0RRsLm6ZUYCfgPOaf6AH74OcyORolgD406J76HXvbnIPbLTD00XWoH3GaV';
  modepay: any;
  type: string = 'password';
  constructor(public cartServ: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  totalSum(items: any): number {
    let sum: number = 0;
    items.forEach((itm) => {
      sum = sum + itm.quantity * Number(itm.articleInfo.price);
    });
    return sum;
  }

  makePayment(amount: any) {
    if (this.modepay =="choix3") {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: this.stripeAPIKey,
        locale: 'auto',
        currency: 'USD',
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
        amount: amount / 10,
      });
      //this.cartServ.clearCart();

    }

else { this.saveCart()}

    }
    saveCart(){
    let subtotal=this.totalSum(this.cartServ.tempCartItems)/1000;
    let items = [];
    for (let item of this.cartServ.tempCartItems) {
      items.push({
        product_name: item.articleInfo.estamp.sujet,
        quantity: item.quantity,
        price: item.articleInfo.price,
        total: item.articleInfo.price * item.quantity
      })
    }
    let cart:any =
      {subTotal:subtotal,
        items: items,
        user: this.authService.getCoonectedUser()._id
      };
      this.cartServ.saveCart(cart).subscribe((res:any) => {
        this.router.navigate(['/invoice',res._id]);
      });
    }
  //saveCart(cart)


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

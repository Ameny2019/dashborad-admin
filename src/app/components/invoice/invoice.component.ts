
import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(public cartServ: CartService,  public authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  cart: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idcart = params.get('id_cart');
      this.cartServ.getCartbyid(idcart).subscribe((res: any) => {
        this.cart = res.data
      });
    });

  }


}

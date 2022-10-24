import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';
import {CartService} from "../../../services/cart.service";
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-topbar1',
  templateUrl: './topbar1.component.html',
  styleUrls: ['./topbar1.component.css']
})
export class Topbar1Component implements OnInit {


  selectedCar: number;

  Prod = [
    { id: 1, name: 'Fleurs' },
    { id: 2, name: 'Stamps' },
    { id: 3, name: 'Poste' },
    { id: 4, name: 'Tunisienne' },
  ];
  
  constructor(private router:Router, public authService: AuthService,public productServ: ProductService, public cartService: CartService) { }

  ngOnInit(): void {    
    
    this.getAllProducts();


  }

  // logout(){
  //   localStorage.removeItem("state");
  //   console.log("here navigate vers home")
  //   this.router.navigateByUrl('home');
  // }
  logout(){
    localStorage.removeItem("state");
    console.log("here navigate vers home")
    this.router.navigateByUrl('');
  }

  getAllProducts() {
    this.productServ.getproduct().subscribe((data) => {
      let result: any = data;
      console.log('Data', result.data);
      let productTempList = result.data.map((elm) => {
        if (elm.name && elm._id) {
          return {
            name: elm.name,
            id: elm._id,
          };
        } else {
          return null;
        }
      });
      console.log('Product list', productTempList);
      let list = productTempList.filter((elm) => elm !== null);
      this.Prod= list ;
    });
  }


}

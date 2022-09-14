import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";



@Component({
  selector: 'app-topbar2',
  templateUrl: './topbar2.component.html',
  styleUrls: ['./topbar2.component.css'],
})
export class Topbar2Component implements OnInit {
  selectedCar: number;

  Prod = [
    { id: 1, name: 'Fleurs' },
    { id: 2, name: 'Stamps' },
    { id: 3, name: 'Poste' },
    { id: 4, name: 'Tunisienne' },
  ];
  constructor(private productServ: ProductService, public cartService: CartService) {}

  ngOnInit(): void {
    this.getAllProducts();
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

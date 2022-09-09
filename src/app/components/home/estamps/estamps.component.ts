import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstampsService } from 'src/app/services/estamps.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-estamps',
  templateUrl: './estamps.component.html',
  styleUrls: ['./estamps.component.css']
})
export class CategoriesComponent implements OnInit {

  products:any;
  n:number=0;
  constructor(private productService:ProductService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.getEstamps();
  }

  getEstamps(){
    console.log("here estamps");
    
    this.productService.getproduct().subscribe(
      (res:any) => {
        this.products=res.data;
        console.log("before estamps is : ",this.products);
        
        this.products = this.products.filter(item=> {
          console.log("item is ",item.producType);  
          if(this.n<8 && item.producType == "estamp"){
            this.n++;
            return true;            
        } else {return false}
          
        })
        console.log("after estamps is : ",this.products);
      }
    )
  }

  toDetail(product:any){
    localStorage.setItem('productToDetail',JSON.stringify(product));
this.router.navigateByUrl("/detail")
  }

}

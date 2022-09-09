import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EfleureService } from 'src/app/services/efleure.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-efleure',
  templateUrl: './efleure.component.html',
  styleUrls: ['./efleure.component.css']
})
export class EfleureComponent implements OnInit {

  products:any;
  n:number=0;
  constructor(private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getEfleurs();
  }

  getEfleurs(){
    console.log("here efleurs");
    
    this.productService.getproduct().subscribe(
      (res:any) => {
        this.products=res.data;
        console.log("before efleurs is : ",this.products);
        
        this.products = this.products.filter(item=> {
          console.log("item is ",item.producType);  
          if(this.n<8 && item.producType == "efleur"){
            this.n++;
            return true;            
        } else {return false}
          
        })
        console.log("after efleurs is : ",this.products);
      }
    )
  }

  toDetail(product:any){
    localStorage.setItem('productToDetail',JSON.stringify(product));
this.router.navigateByUrl("/detail")
  }

}


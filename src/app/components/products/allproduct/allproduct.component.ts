import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
 
  products:any;
  searchText

  n:number=0;
  constructor(private productService:ProductService,
              private router:Router
    ) { }

  ngOnInit(): void {    

    this.getAllProducts();
   
  }

  getAllProducts(){
    console.log("here All Products");
    
    this.productService.getproduct().subscribe(
      (res:any) => {
        this.products=res.data;
        console.log("before efleurs is : ",this.products);
        
        this.products = this.products.filter(item=> {
          console.log("item is ",item.producType);  
          if(this.n<80 && (item.producType == "efleur" || item.producType == "estamp")){
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

  onTapeKeyword(value: { keyword: any }): void {
    console.log(value.keyword,"thats what you are typing")
  }


}

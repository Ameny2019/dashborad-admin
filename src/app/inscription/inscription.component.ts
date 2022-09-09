import { Component, OnInit, NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registeForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,) { }

    ngOnInit() {
      this.registeForm = this.formBuilder.group({
        "nom": new FormControl (null, Validators.required),
        "email":new FormControl  ('', (Validators.required, Validators.email)),
        "password": new FormControl ('', (Validators.required, Validators.minLength(8))),
        "passwordconfirm":new FormControl  ('', (Validators.required, Validators.minLength(8))),
        role: ['Client']
      })
    }
  
    
  
    register(){
      if (this.registeForm.value.password !== this.registeForm.value.passwordconfirm) {
        alert('merci de confimer votre mot de passe');
        return;
      }
      this.authService.register(this.registeForm.value).subscribe(
        (res:any) => {
          console.log("register result :",res);
          this.router.navigateByUrl('/login');
        }, (err) => {
          alert('error');
        }
      )
  
  
  
    }
  
  }
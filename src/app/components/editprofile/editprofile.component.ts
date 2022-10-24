import { AuthService } from 'src/app/services/auth.service';

import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit,Input} from '@angular/core';
import { EditprofileService } from '../../services/editprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {


  @Input() 
  text: string ;

  editmode = false;
  editText = '';


  public profileForm: FormGroup;
  public name: string;
  public role:string; 
  public email:string; 
  public adresse:string; 
  _id: any;
  constructor(public formBuilder: FormBuilder,public AuthService:AuthService, public editprofileService:EditprofileService) {
    this.profileForm = this.formBuilder.group({
      addresse: ['', Validators.required],

      client: ['', Validators.required],

      email: ['', Validators.required],

      nom: ['', Validators.required],

      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],

      
    });
  }

  ngOnInit(): void {
    let data = localStorage.getItem('user');
    let user = JSON.parse(data);
    if (user) {
      this.profileForm.controls['client'].setValue(user.nom);
      this.profileForm.controls['email'].setValue(user.email);
      this.name=user.nom ; 
      this.role = user.role ; 
      this.email = user.email ; 
      this.adresse = user.adresse ; 
      //this.profileForm.controls['addresse'].setValue(user.addresse);
    }


  }

    edit() {
      this.editmode = true;
      this.editText = this.text;
    }
  

    save() {
      this.editmode = false;
      this.text = this.editText; this.editmode = false;
      this.text = this.editText; this.editmode = false;
      this.text = this.editText;
      this.editprofileService.save('text', this.editText);
    }
  
    cancel() {
      this.editmode = false;
      this.editText = '';
    }
  }









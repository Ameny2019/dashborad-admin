import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // LoginUserData={}

  formLogin: FormGroup;
  errorLogin = false;
  urlParam: number;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.urlParam = +params.get('param');
    });
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // LoginUser(){
  //   this.LoginUser(this.LoginUserData).subscribe();
  //       (res:any) => console.log(res);
  //       (err:any) => console.log(err);
  //   }


  login() {
    this.errorLogin = false;
    this.authService.login(this.formLogin.value).subscribe((res: any) => {
      console.log('login is :', res);
      if (res.token && res.user.role === 'Client') {
        this.authService.setConnected(res.token, res.user, '1');
        if (this.urlParam == 0) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/cartDetail']);
        }
        this.messageService.add({severity:'success', summary:'Congratulation', detail:'Rebonjour !!'});
      } else {
        this.errorLogin = true;
        this.messageService.add({severity:'error', summary:'Problème de connexion', detail:'Email ou mot de passe incorrecte !!'});
        console.log('here role', res.user.role);
      }
    });
  }
}

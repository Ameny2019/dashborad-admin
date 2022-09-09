import { InscriptionComponent } from './inscription/inscription.component';
import { ProgAnnuelComponent } from './components/prog-annuel/prog-annuel.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './components/products/allproduct/allproduct.component';
import { DetailComponent } from './components/products/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { QrComponent } from './components/qr/qr.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginGuard } from './gaurds/login.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'home' },

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'cartDetail', component: CartDetailComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'product', component: AllproductComponent },
  { path: 'programme', component: ProgAnnuelComponent },
  { path: 'qr', component: QrComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
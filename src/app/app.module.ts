import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Topbar1Component } from './components/home/topbar1/topbar1.component';
import { Topbar2Component } from './components/home/topbar2/topbar2.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
// import { NavbarComponent } from './components/home/navbar/navbar.component';
import { FeaturedComponent } from './components/home/featured/featured.component';
import { CategoriesComponent } from './components/home/estamps/estamps.component';
import { OfferComponent } from './components/home/offer/offer.component';
import { SubscribeComponent } from './components/home/subscribe/subscribe.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AllproductComponent } from './components/products/allproduct/allproduct.component';
import { DetailComponent } from './components/products/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProgAnnuelComponent } from './components/prog-annuel/prog-annuel.component';
import { QrComponent } from './components/qr/qr.component';
import { EfleureComponent } from './components/home/efleure/efleure.component';

import { LayoutComponent } from './components/layout/layout.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfileComponent } from './profile/profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StripeModule } from "stripe-angular";
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BannerComponent } from './components/home/banner/banner.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { ServiceErrorComponent } from './service-error/service-error.component';
import { HistphilComponent } from './components/histphil/histphil.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CondventeComponent } from './components/condvente/condvente.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditprofileService } from './services/editprofile.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Topbar1Component,
    Topbar2Component,
    SidebarComponent,

    FeaturedComponent,
    CategoriesComponent,
    OfferComponent,
    SubscribeComponent,
    FooterComponent,
    AllproductComponent,
    DetailComponent,
    ContactComponent,
    AboutComponent,
    ProgAnnuelComponent,
    QrComponent,
    EfleureComponent,

    LayoutComponent,
    CartDetailComponent,
    InscriptionComponent,
    ProfileComponent,
    BannerComponent,
    NotFoundErrorComponent,
    ServiceErrorComponent,
    HistphilComponent,
    CheckoutComponent,
    InvoiceComponent,
    CondventeComponent,
    EditprofileComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ToastModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [MessageService,EditprofileService],
  bootstrap: [AppComponent],
})
export class AppModule {}

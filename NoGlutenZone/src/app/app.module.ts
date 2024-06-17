import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NGZAboutComponent } from './ngz-about/ngz-about.component';
import { NGZShopComponent } from './ngz-shop/ngz-shop.component';
import { QuantityButtonsComponent } from './quantity-buttons/quantity-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    NGZAboutComponent,
    NGZShopComponent,
    QuantityButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

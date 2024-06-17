import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NGZShopComponent } from './ngz-shop/ngz-shop.component';
import { NGZAboutComponent } from './ngz-about/ngz-about.component';

const routes: Routes = [
  {
    path: 'products',
    component: NGZShopComponent
  },
  {
    path: 'about',
    component: NGZAboutComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

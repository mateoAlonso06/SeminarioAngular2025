import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersShopComponent } from './sneakers-shop/sneakers-shop.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sneaker-shop',
    pathMatch: 'full'
  },
  {
    path: 'sneaker-shop',
    component: SneakersShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

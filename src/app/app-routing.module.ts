import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersShopComponent } from './components/sneakers-shop/sneakers-shop.component';
import { AboutComponent } from './components/about/about.component';
import { LoadSneakerComponent } from './components/load-sneaker/load-sneaker-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sneaker-shop',
    pathMatch: 'full',
  },
  {
    path: 'sneaker-shop',
    component: SneakersShopComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'load-sneaker',
    component: LoadSneakerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

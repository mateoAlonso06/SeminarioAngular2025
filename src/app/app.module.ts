import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SneakersListComponent } from './components/sneakers-list/sneakers-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SneakersShopComponent } from './components/sneakers-shop/sneakers-shop.component';
import { CartComponent } from './components/cart/cart.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { CargarSneakerComponent } from './components/cargar-sneaker/cargar-sneaker.component';
import { LoadSneakerComponent } from './components/load-sneaker/load-sneaker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SneakersListComponent,
    AboutComponent,
    SneakersShopComponent,
    CartComponent,
    InputIntegerComponent,
    CargarSneakerComponent,
    LoadSneakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

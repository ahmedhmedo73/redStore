import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path: '', redirectTo:"home",pathMatch:"full"},
{path: 'home', component: HomeComponent},
{path: 'products', component: ProductsComponent},
{path: 'cart', component: CartComponent},
{path: 'productsdetails/:id', component: ProductdetailsComponent},
{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

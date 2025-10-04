import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './components/product/product';
import { Student } from './components/student/student';
import { Observablesdemo } from './components/observablesdemo/observablesdemo';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product/product-details/product-details';
import { Home } from './components/home/home';
import { Producthome } from './components/producthome/producthome';
import { Proddetailshome } from './components/proddetailshome/proddetailshome';

const routes: Routes = [
  {
    path: 'home', component: Home,
    children: [
      {
        path: '', component: Producthome,
      },
      {
        path: 'products', component: Product,
        children: [
          { path: '', component: Proddetailshome },
          { path: ':id', component: ProductDetails },
        ]
      },
    ]
  },
  // { path: 'products', component: Product },
  // { path: 'products/:id', component: ProductDetails },
  { path: 'students', component: Student },
  { path: 'obsdemo', component: Observablesdemo },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

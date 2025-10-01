import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './components/product/product';
import { Student } from './components/student/student';
import { Observablesdemo } from './components/observablesdemo/observablesdemo';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product/product-details/product-details';

const routes: Routes = [
  { path: 'products', component: Product },
  { path: 'products/:id', component: ProductDetails },
  { path: 'students', component: Student },
  { path: 'obsdemo', component: Observablesdemo },
  { path: '**', component: Notfound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

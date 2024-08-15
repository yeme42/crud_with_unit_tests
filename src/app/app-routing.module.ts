import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { TableProductComponent } from './table-product/table-product.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent
  },
  { 
    path: 'product', component: TableProductComponent
  } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

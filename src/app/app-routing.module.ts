import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/home/home-page/home-page.module').then(m => m.HomePageModule)},
    {path: 'login', loadChildren: () => import('./views/home/sign-in/sign-in.module').then(m => m.SignInModule)}
  ]},
  {path: 'user', component: UserLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/user/all-products/all-products.module').then(m => m.AllProductsModule)},
    {path: 'commander', loadChildren: () => import('./views/user/commander/commander.module').then(m => m.CommanderModule)},
    {path: 'addProduct', loadChildren: () => import('./views/user/add-product/add-product.module').then(m => m.AddProductModule)},
    {path: 'suppliers', loadChildren: () => import('./views/user/all-suppliers/all-suppliers.module').then(m => m.AllSuppliersModule)},
    {path: 'addSupplier', loadChildren: () => import('./views/user/add-supplier/add-supplier.module').then(m => m.AddSupplierModule)},
    {path: 'factures', loadChildren: () => import('./views/user/all-factures/all-factures.module').then(m => m.AllFacturesModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

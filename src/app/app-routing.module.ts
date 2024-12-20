import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", component: MainLayoutComponent, children:[
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutUsComponent},
    {path:"contact", component: ContactUsComponent},
    {path:"products", component: CartComponent, canActivate: [AuthGuard]},
    {path:"addProduct", component: AddProductComponent, canActivate: [AuthGuard]},
    {path:"editProduct/:id", component: EditProductComponent, canActivate: [AuthGuard]},
    {path:"products/:id", component: ProductDetailsComponent, canActivate: [AuthGuard]},
    {path: "user", loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)}
  ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path:"**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

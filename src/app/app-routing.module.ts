import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: ProductListComponent},
  {path: 'product/manager', component: ProductManagerComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: "404", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

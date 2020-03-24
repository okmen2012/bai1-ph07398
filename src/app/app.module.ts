import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './service/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, SlideComponent, ProductListComponent, ProductComponent, ProductManagerComponent, AboutComponent, HomeComponent, ProductDetailComponent, ProductAddComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }

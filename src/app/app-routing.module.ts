import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ToysComponent } from './toys/toys.component';
import{ ContactComponent} from './contact/contact.component'
import { WalmartdealsComponent } from './deals/walmartdeals/walmartdeals.component';
import { ProductdetailsComponent} from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

//Configure the routing path for the above imported components
const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'toys',component:ToysComponent},
  {path:'contact',component:ContactComponent},
   {path:'deals',component:WalmartdealsComponent},
  {path:'product_details',component:ProductdetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProductComponent},
  {path:'cartitem',component:CartItemsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

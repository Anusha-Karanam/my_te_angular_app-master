import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
//import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { ToysComponent } from './toys/toys.component';
import{ ContactComponent} from './contact/contact.component'
import { WalmartdealsComponent } from './deals/walmartdeals/walmartdeals.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
//import { RegisterComponent } from './register/register.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'toys',component:ToysComponent},
  {path:'contact',component:ContactComponent},
   {path:'deals',component:WalmartdealsComponent},
  {path:'prod_details',component:ProductdetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

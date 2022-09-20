import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
//import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { ToysComponent } from './toys/toys.component';
//import { MicrovenComponent } from './microven/microven.component';
//import { WalmartdealsComponent } from './deals/walmartdeals/walmartdeals.component';
//import { RegisterComponent } from './register/register.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
 // {path:'fridge',component:RefrigeratorComponent},
  {path:'toys',component:ToysComponent},
 // {path:'micro',component:MicrovenComponent},
 // {path:'deals',component:WalmartdealsComponent},
//{path:'register',component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

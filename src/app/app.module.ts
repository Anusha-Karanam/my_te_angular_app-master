import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { SquarePipe } from './square.pipe';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ToysComponent } from './toys/toys.component';
import { ToysdealsComponent } from './toys/toysdeals/toysdeals.component';
import { DealsComponent } from './deals/deals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { ContactComponent } from './contact/contact.component';
import { WalmartdealsComponent } from './deals/walmartdeals/walmartdeals.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    SquarePipe,
    AdvertisementComponent,
    AllproductsComponent,
    ToysComponent,
    ToysdealsComponent,
    DealsComponent,
    CounterComponent,
    CounterchildComponent,
   ContactComponent,
   WalmartdealsComponent,
   ProductdetailsComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

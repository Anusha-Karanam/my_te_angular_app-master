import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  //STRING INTERPOLATION
  title = 'Walmart';
  //PROPERTY BINDING
  public logo="https://www.freepnglogos.com/uploads/walmart-logo-24.jpg";
  
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}

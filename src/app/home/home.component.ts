import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  //TWO-WAY BINDING
  name = "John"
  //theme for Carousel contents
  mycolor = 'red';
  //Array - *ngFor
  //key:value
  Products: any[] = [
    {
      "productname": "Kids Dress"
    },
    {
      "productname": "Girls Dress"
    },
    {
      "productname": "Boys Dress"
    },
    {
      "productname": "Make-Up Kit for Girls"
   },
    {
     "productname": "Perfumes for Boys"
   },
    {
      "productname": "Grocery"
    },
    {
     "productname": "Vegetables"
    },
   {
      "productname": "Fruits"
    },
    {
     "productname": "Dairy"
   }

  ]
  //Event to hide Products
  isVisible: boolean = true;
 hide_products() {
    this.isVisible = !this.isVisible;
  }
  //*ngSwitch
  product = 'Dress'

  //property errorcolor for style binding using ternary operator
  errorcolor: string = 'red'

  //Array for style binding with ternary operator with ngSwitch

 //ngClass - created an instance for the class products
 prod:products=new products();
 //using an array we can access the properties and bind them to ngClass
 prod_array:string[]=['blue','shadow'];
 //date property for PIPE demo
 date_today:string | undefined;
 price:number | undefined;
  
  ngOnInit(): void {
    //initialize the date in the oninit function
    //this.date_today=new Date().toDateString();
   // this.price=1000;

  }
}
//ngClass
class products{
 blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}

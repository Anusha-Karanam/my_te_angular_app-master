import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
//import contact service and class
import { Contact } from '../contact';
import { ContactService } from '../contact.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cont: Contact[]=[];
  //constructor injection of the ContactService
  constructor(private contservice:ContactService) { }
 

  ngOnInit(): void {
    const contObservable= this.contservice.getContactDetails();
    contObservable.subscribe((contData: Contact[])=>{
      this.cont=contData;
    });
  }
 
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }


}

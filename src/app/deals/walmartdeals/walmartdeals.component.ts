import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";


@Component({
  selector: 'app-walmartdeals',
  templateUrl: './walmartdeals.component.html',
  styleUrls: ['./walmartdeals.component.css']
})
export class WalmartdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}

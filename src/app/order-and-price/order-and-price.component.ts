import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-order-and-price',
  templateUrl: './order-and-price.component.html',
  styleUrls: ['./order-and-price.component.css']
})
export class OrderAndPriceComponent implements OnInit {
  protected price: number;
  protected order: number;
  protected results: Observable<any>;


  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  search() {
    this.api.find(this.price, this.order).subscribe();
    this.results = this.api.getFakeMovies()
  }
}

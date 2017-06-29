import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import Movie from './models/Movie';

import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
  private baseUrl = `https://ex1-.herokuapp.com`;


  constructor(private http: Http) { }

  getAll(): Observable<Array<Movie>> {
    return this.http.get(this.baseUrl + '/getAllMovies').map(res => res.json())
  }

  findById(id: string): Observable<Movie> {
    return this.http.post(this.baseUrl + '/getMovieById', {id}).map(res => res.json());
  }

  find(price?: number, order?: number) {
    return this.http.post(this.baseUrl + '/getMovieByPriceAndOrders', {price, order}).map(res => res.json());
  }

  getFakeMovies() {
    return new BehaviorSubject([{
      '_id': '59235efd734d1d5883730729',
      'id': 1,
      'name': 'Moana',
      'year': 2016,
      'runtime': '107 Min',
      'price': 20,
      'orders': 500,
      'category': ['Animation', 'Adventure', 'Comedy']
    }, {
      '_id': '59235f2e734d1d588373074b',
      'id': 2,
      'name': 'Passengers',
      'year': 2016,
      'runtime': '116 Min',
      'price': 20,
      'orders': 300,
      'category': ['Adventure', 'Drama', 'Romance']
    }, {
      '_id': '59235f63734d1d5883730754',
      'id': 3,
      'name': 'Beauty and the Beast',
      'year': 2017,
      'runtime': '129 Min',
      'price': 25,
      'orders': 700,
      'category': ['Family', 'Fantasy', 'Musical']
    }, {
      '_id': '59235f7d734d1d5883730767',
      'id': 4,
      'name': 'Life',
      'year': 2017,
      'runtime': '104 Min',
      'price': 20,
      'orders': 500,
      'category': ['Horror', 'Sci-Fi', 'Thriller']
    }]);
  }
}

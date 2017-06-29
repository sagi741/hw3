import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import Movie from '../models/Movie';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search', templateUrl: './search.component.html', styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  protected idSearch: string;
  protected result: Movie;
  protected fakeMovies: BehaviorSubject<any>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.fakeMovies = this.api.getFakeMovies()
  }

  search() {
    this.api.findById(this.idSearch).subscribe(result => this.result = result);
  }
}

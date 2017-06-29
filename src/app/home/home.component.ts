import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import Movie from '../models/Movie';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected movies: Observable<Array<Movie>>;
  protected fakeMovies: Observable<any>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.movies = this.api.getAll();
    this.fakeMovies = this.api.getFakeMovies()
  }

}

import { Component, OnInit } from '@angular/core';
import { Movie } from './../model/movie';
import { MovieService } from '../services/movie-service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {
/**
 * 
 * 
 * @type {Movie[]}
 * @memberof MoviesComponent
 */
  movies: Movie[];
  moviedetail: Movie;


  /**
   * Creates an instance of MoviesComponent.
   * @param {MovieService} movieservice 
   * @memberof MoviesComponent
   */
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
    
   this.movies =this.movieservice.getMovies();
  }

}

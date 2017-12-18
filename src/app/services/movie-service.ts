import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

/**
 * 
 * 
 * @export
 * @class EmployeeService
 */
@Injectable()


export class MovieService{

    movieList:Movie[] =[];
   

      getMovies(): Movie[]
      { 
      return this.movieList;
      }
        
      createMovie(newMovie: Movie)
      {
      this.movieList.unshift(newMovie);
      
      }
        
}
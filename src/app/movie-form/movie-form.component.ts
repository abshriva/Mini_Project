import { Component, OnInit,Inject } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie-service';
import { FormGroup, FormControl , Validators,FormBuilder} from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class MovieFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})


export class MovieFormComponent implements OnInit {

  form: FormGroup;
  movie: Movie = new Movie();

  /**
   * Creates an instance of MovieFormComponent.
   * @param {MovieService} movieservice 
   * @param {FormBuilder} fb 
   * @memberof MovieFormComponent
   */
  constructor(private movieservice: MovieService, private fb:FormBuilder) { }

  ngOnInit() {

    this.movie={
      name:'',
      rating:null,
      description:'',
      releasedate:''
    }

    this.createFormWithFormBuilder();
  }

  /**
   * 
   * 
   * @private
   * @memberof MovieFormComponent
   */
  private createFormWithFormBuilder() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      rating:['', Validators.required],
      description: ['', ],
      releasedate: ['', Validators.required]  
    });
  }

  onSave(values)
  {
    
    this.movie={
      name:values.name,
      rating:values.rating,
      description:values.description,
      releasedate:values.releasedate
    };

    if(this.movie.description =='')
    {
      this.movie.description='N/A'
    }

    this.movieservice.createMovie(this.movie);
    this.movie = new Movie();
}
}

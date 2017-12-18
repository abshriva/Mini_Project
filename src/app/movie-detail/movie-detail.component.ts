import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()moviedetail
  movieList: Movie

  imageUrl = 'https://openclipart.org/image/800px/svg_to_png/23958/Anonymous-Movie-slate.png';
  
  constructor() { }

  ngOnInit() {
  }

}

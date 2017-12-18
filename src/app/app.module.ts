import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms'
import { MovieService } from './services/movie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedStarComponent } from './shared-star/shared-star.component';
import { BasicHighlightDirectiveDirective } from './directives/custom-directive';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieFormComponent,
    MovieDetailComponent,
    SharedStarComponent,
    BasicHighlightDirectiveDirective
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

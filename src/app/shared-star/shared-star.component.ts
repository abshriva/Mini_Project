import { Component, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-shared-star',
  templateUrl: './shared-star.component.html',
  styleUrls: ['./shared-star.component.css']
})
/**
 * 
 * 
 * @export
 * @class SharedStarComponent
 * @implements {OnChanges}
 */

export class SharedStarComponent implements OnChanges {

  
  @Input() starrating:number;
  starwidth:number;

  ngOnChanges():void{
      this.starwidth= this.starrating * 86 /5;
  }
  constructor() { }


}

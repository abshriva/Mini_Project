import { Directive,OnInit,ElementRef ,HostListener,Renderer2,Input} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
/**
 * 
 * 
 * @export
 * @class BasicHighlightDirectiveDirective
 * @implements {OnInit}
 */

export class BasicHighlightDirectiveDirective implements OnInit{

 
  @Input() mRating:number;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
              ) { }

  ngOnInit() {
    
}

/**
 * 
 * 
 * @memberof BasicHighlightDirectiveDirective
 */
@HostListener('mouseenter') mouseOver() 
{
  

  if(this.mRating >= 1 && this.mRating <=2){
  
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
  }
  else if(this.mRating >= 3 && this.mRating <=4)
  {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
  else
  {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'skyblue');
  }
}


@HostListener('mouseleave') mouseLeave() {
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

}
}
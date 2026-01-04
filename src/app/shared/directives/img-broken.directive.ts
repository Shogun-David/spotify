import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  
  //@Input() srcFallback: string = '../../../assets/images/img-broken.png';
  constructor(private elementRef: ElementRef) {}
  
  @HostListener('error') handleError(): void {
    const nativeElement: HTMLImageElement = this.elementRef.nativeElement;
    nativeElement.src = '../../../assets/images/img-broken.png';
    console.log("Esta imagen está rota", this.elementRef);
  }
}



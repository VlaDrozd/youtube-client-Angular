import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorByDate]'
})
export class ColorByDateDirective implements OnInit {
  @Input('appColorByDate') public date: string;

  constructor(private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    let days: number = (new Date().getTime() -
      new Date(this.date).getTime()) / (1000 * 60 * 60 * 24);
    if (days < 7) {
      this.elementRef.nativeElement.style.background = '#2F80ED';
    } else if (days < 31) {
      this.elementRef.nativeElement.style.background = '#27AE60';
    } else if (days < 183) {
      this.elementRef.nativeElement.style.background = '#F2C94C';
    } else {
      this.elementRef.nativeElement.style.background = '#EB5757';
    }
  }

}

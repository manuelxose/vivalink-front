// src/app/shared/directives/highlight.directive.ts

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlightColor = 'yellow';

  private originalBackgroundColor: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalBackgroundColor);
  }

  private highlight(color: string) {
    if (!this.originalBackgroundColor) {
      this.originalBackgroundColor =
        this.el.nativeElement.style.backgroundColor;
    }
    this.el.nativeElement.style.backgroundColor = color;
  }
}

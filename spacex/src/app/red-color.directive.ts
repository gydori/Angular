import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appRedColor]"
})
export class RedColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input() index: number;

  @HostListener("mouseenter")
  hover() {
    if (this.index % 2 == 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, "color", "red");
    }
  }

  @HostListener("mouseleave")
  leave() {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", null);
  }
}

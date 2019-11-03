import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  wtfLeave
} from "@angular/core";

@Directive({
  selector: "[appGreen]"
})
export class GreenDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter")
  hover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "green"
    );
  }

  @HostListener("mouseleave")
  leave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      null
    );
  }
}

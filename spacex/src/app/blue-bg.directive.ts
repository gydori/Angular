import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appBlueBG]"
})
export class BlueBGDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter")
  hover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "lightblue"
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

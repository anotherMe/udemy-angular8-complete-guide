
import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  // much shorter and elegant way to achieve the same result

  // @HostBinding('class.open') isOpen = false;
  //
  // @HostListener('click') onClick() {
  //   this.isOpen = !this.isOpen;
  // }


  // long and cumbersome way

  private isOpen: boolean;

  @HostListener('click') onClick() {
    this.toggleOpenStatus();
  }

  constructor(private renderer: Renderer2, public elRef: ElementRef) {
  }

  ngOnInit() {
    this.isOpen = false;
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }

  private toggleOpenStatus() {

    if (this.isOpen) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    }

    this.isOpen = !this.isOpen;
  }

}

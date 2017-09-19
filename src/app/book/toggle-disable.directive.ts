import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggleDisable]'
})
export class ToggleDisableDirective {

  constructor(private el: ElementRef) { }

  @HostListener('dblclick') onDblClick() {
    this.setDisableStatus(false);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setDisableStatus(true);
  }

  // private toggleDisableStatus() {
  //   const isReadonly = this.el.nativeElement.getAttribute('readonly') || false;
  //   if (isReadonly) {
  //     this.setDisableStatus(false);
  //   } else {
  //     this.setDisableStatus(true);
  //   }
  // }

  private setDisableStatus(bool: boolean) {
    if (bool) {
      this.el.nativeElement.setAttribute('readonly', 'readonly');
    } else {
      this.el.nativeElement.removeAttribute('readonly');
    }
  }
}

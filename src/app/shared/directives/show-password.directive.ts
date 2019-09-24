
import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appShowPassword]',
})
export class ShowPasswordDirective {
  private _shown = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.setup();
  }
  @Input() elementId;


  toggle(span: HTMLElement) {
    const passwordInput = document.getElementById(this.elementId);
    this._shown = !this._shown;
    if (this._shown) {
      passwordInput.setAttribute('type', 'text');
      span.className = 'fas fa-eye-slash';
    } else {
      passwordInput.setAttribute('type', 'password');
      span.className = 'fas fa-eye';
    }
  }
  setup() {
    const element = this.el.nativeElement;
    element.addEventListener('click', (event) => {
      this.toggle(element);
    });
  }
}

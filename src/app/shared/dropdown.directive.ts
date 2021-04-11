import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // @HostBinding 的作用是把網頁元素的 property 和 value 綁定，後面直接接想要綁定的 property
  @HostBinding('class.open') isOpen: boolean = false;

  // 將監聽範圍從 click 的 element 擴大到整個頁面，所以是 'document:click'
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
  }

  constructor(private elRef: ElementRef) { }
}
import $ from 'jquery';

export class BaseElements {
  constructor() {
    this.element = null;
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'PLease override getElementString in BaseElement';
  }
}

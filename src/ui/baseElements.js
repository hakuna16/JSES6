import $ from 'jquery';

export class BaseElements {
  constructor() {
    this.element = null;
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'PLease override getElementString in BaseElement';
  }

  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }
}

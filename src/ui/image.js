import { BaseElements } from './baseElements.js';

export class Image extends BaseElements {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  getElementString() {
    return `
          <img src="${this.fileName}" style="width: 100%;" />
      `;
  }
}

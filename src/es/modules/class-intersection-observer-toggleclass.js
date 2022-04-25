'use strict';

export class IntersectionObserverToggleClass {

  constructor(settings) {
    this.selector = settings.selector;
    this.className = settings.className;
    this.toggle = settings.toggle;
    this.doObserve = (element) => {
      const targets = document.querySelectorAll(element);
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };
      const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
          if(this.toggle) {
            if(item.isIntersecting) {
              item.target.classList.add(this.className);
            } else {
              item.target.classList.remove(this.className);
            }
          } else {
            if(item.isIntersecting) {
              item.target.classList.add(this.className);
            }
          }
        });
      }, options);
      Array.from(targets).forEach((target) => {
        observer.observe(target);
      });
    }
    this.doObserve(this.selector);
  }

}
'use strict';

interface settingsType {
  selector: string, 
  className: string, 
  toggle: boolean
}
interface optionsType {
  root: null,
  rootMargin: string,
  threshold: number
}

export class IntersectionObserverToggleClass {

  constructor(private settings: settingsType) {
    (this as any).selector = settings.selector;
    (this as any).className = settings.className;
    (this as any).toggle = settings.toggle;
    (this as any).doObserve = (element: string) => {
      const targets: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(element);
      const options: optionsType = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };
      const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if((this as any).toggle) {
          if(item.isIntersecting) {
            item.target.classList.add((this as any).className);
          } else {
            item.target.classList.remove((this as any).className);
          }
        } else {
          if(item.isIntersecting) {
            item.target.classList.add((this as any).className);
          }
        }
      });
      }, options);
      Array.from(targets).forEach((target: HTMLElement): void => {
        observer.observe(target);
      });
    }
    (this as any).doObserve((this as any).selector);
  }
  
}
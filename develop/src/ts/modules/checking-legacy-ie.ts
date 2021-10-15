'use strict';

export function IsLegacyIE(): void | boolean {
  const currentUserAgent: string = window.navigator.userAgent.toLowerCase(),
    notice = 'ご利用のウェブブラウザでは当サイトを正常に閲覧できません。ブラウザのバージョンを最新にして再度アクセスしてください。',
    targets: Array<string> = [ 
      'msie 6.0', // Internet Explorer 6
      'msie 7.0', // Internet Explorer 7
      'msie 8.0', // Internet Explorer 8
      'msie 9.0', // Internet Explorer 9
      'msie 10.0', // Internet Explorer 10
      'trident/7.0' // Internet Explorer 11
    ];
  Array.prototype.slice.call(targets).forEach((target: string): void | boolean => {
    if(currentUserAgent.indexOf(target) !== -1) {
      alert(notice);
    } else {
      return false;
    }
  });
}
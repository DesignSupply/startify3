'use strict';

export function FindBrowser() {
  const currentUserAgent = window.navigator.userAgent.toLowerCase();
  if(currentUserAgent.indexOf('msie') !== -1 || currentUserAgent.indexOf('trident') !== -1) {
    return 'Internet Explorer';
  } else if(currentUserAgent.indexOf('edge') !== -1) {
    return 'Microsoft Edge';
  } else if(currentUserAgent.indexOf('edg') !== -1) {
    return 'Chromium Edge';
  } else if(currentUserAgent.indexOf('opr') !== -1) {
    return 'Opera';
  } else if(currentUserAgent.indexOf('chrome') !== -1) {
    return 'Google Chrome';
  } else if(currentUserAgent.indexOf('safari') !== -1) {
    return 'Safari';
  } else if(currentUserAgent.indexOf('firefox') !== -1) {
    return 'FireFox';
  } else {
    return 'other Browser';
  }
}
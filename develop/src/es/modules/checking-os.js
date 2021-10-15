'use strict';

export function FindOS() {
  const currentUserAgent = window.navigator.userAgent.toLowerCase();
  if(currentUserAgent.indexOf('windows nt') !== -1) {
    return 'Windows';
  } else if((currentUserAgent.indexOf('android') !== -1) && (currentUserAgent.indexOf('mobile') !== -1)) {
    return 'Android Mobile';
  } else if((currentUserAgent.indexOf('android') !== -1) && (currentUserAgent.indexOf('mobile') === -1)) {
    return 'Android Tablet';
  } else if(currentUserAgent.indexOf('iphone') !== -1) {
    return 'iOS iPhone';
  } else if(currentUserAgent.indexOf('ipad') !== -1) {
    return 'iOS iPad';
  } else if(currentUserAgent.indexOf('mac os') !== -1) {
    return 'Mac OS';
  } else {
    return 'other OS';
  }
}
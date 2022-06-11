'use strict';

// stylesheet import
import '../sass/main.sass';
// import '../scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { IntersectionObserverToggleClass } from './modules/class-intersection-observer-toggleclass';
import { IsLegacyIE } from './modules/checking-legacy-ie';
import { FindOS } from './modules/checking-os';
import { FindBrowser } from './modules/checking-browser';
import { ExampleComponent } from './tsx/app/ExampleComponent'

// React
const App: React.VFC = (): JSX.Element  => {
  return (
    <>
      <ExampleComponent />
    </>
  )
}
ReactDOM.render( <App />, document.getElementById('app') );

// Intersection Observer
new IntersectionObserverToggleClass({
  selector: '.observe_target', 
  className: 'observed', 
  toggle: true
});

// checking legacy IE
IsLegacyIE();

// checking OS
FindOS();

// checking browser
FindBrowser();
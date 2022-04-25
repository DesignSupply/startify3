import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Head } from './components/_Head.jsx';
import { HeadMeta } from './components/_HeadMeta.jsx';
import { CommonHeader } from './components/_CommonHeader.jsx';
import { CommonFooter } from './components/_CommonFooter.jsx';
import { CommonExternal } from './components/_CommonExternal.jsx';
import { BodyScript } from './components/_BodyScript.jsx';
import { PageHome } from './components/_PageHome.jsx';

const pageMeta = {
  name: 'home',
  title: 'トップページ',
  description: 'サイトのトップページです',
  ogpImage: 'assets/img/icon/ogp_default.jpg',
  type: 'website',
  url: 'https://example.com/'
};

export default () => `
  <!DOCTYPE html>
  <html lang="ja" data-theme="light">
    <head>
      ${renderToStaticMarkup(<Head meta={pageMeta} />)}
      ${renderToStaticMarkup(<HeadMeta meta={pageMeta} />)}
    </head>
    <body>
      <div id="app">
        <div class="l-base">
          ${renderToStaticMarkup(<CommonHeader meta={pageMeta} />)}
          <!-- header end -->
          ${renderToStaticMarkup(<PageHome meta={pageMeta} />)}
          <!-- main end -->
          ${renderToStaticMarkup(<CommonFooter meta={pageMeta} />)}
          <!-- footer end -->
        </div>
        <!-- base end -->
        ${renderToStaticMarkup(<CommonExternal meta={pageMeta} />)}
        <!-- external end -->
      </div>
      <!-- app end -->
      ${renderToStaticMarkup(<BodyScript meta={pageMeta} />)}
    </body>
  </html>
`;
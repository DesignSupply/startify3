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

const jsonLd = [
  {
    '@type': 'ListItem',
    position: 1,
    item: {
      '@id': 'https://example.com/',
      name: 'HOME'
    }
  }
];

export default () => `
  <!DOCTYPE html>
  <html lang="ja" data-theme="light">
    <head>
      ${renderToStaticMarkup(<Head meta={pageMeta} />)}
      ${renderToStaticMarkup(<HeadMeta meta={pageMeta} />)}
      <script type="application/ld+json">
        {
          "@context":"http://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement": ${JSON.stringify(jsonLd)}
        }
      </script>
    </head>
    <body>
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
      ${renderToStaticMarkup(<BodyScript meta={pageMeta} />)}
    </body>
  </html>
`;
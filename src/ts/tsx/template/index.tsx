import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Head } from './components/_Head';
import { HeadMeta } from './components/_HeadMeta';
import { CommonHeader } from './components/_CommonHeader';
import { CommonFooter } from './components/_CommonFooter';
import { CommonExternal } from './components/_CommonExternal';
import { BodyScript } from './components/_BodyScript';
import { PageHome } from './components/_PageHome';

interface pageMetaInterface {
  name: string,
  title: string,
  description: string,
  ogpImage: string,
  type: string,
  url: string
}

interface jsonLdInterface {
  '@type': string,
  position: number,
  item: {
    '@id': string,
    name: string
  }
}

const pageMeta: pageMetaInterface = {
  name: 'home',
  title: 'トップページ',
  description: 'サイトのトップページです',
  ogpImage: 'assets/img/icon/ogp_default.jpg',
  type: 'website',
  url: 'https://example.com/'
};

const jsonLd: jsonLdInterface[] = [
  {
    "@type": "ListItem",
    "position": 1,
    "item": {
      "@id":"https://example.com/",
      "name":"HOME"
    }
  }
];

export default (): string => `
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
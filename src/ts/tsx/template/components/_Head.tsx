import React from 'react';

interface propsInterface {
  meta: {
    name: string,
    title: string,
    description: string,
    ogpImage: string,
    type: string,
    url: string,
  }
}

export const Head: React.VFC<propsInterface> = (props) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="google-site-verification" content="" />
      <meta name="msvalidate.01" content="" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,follow,noodp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="p:domain_verify" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@" />
      <meta property="twitter:account_id" content="" />
      <meta property="fb:admins" content="" />
      <meta property="fb:app_id" content="" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="msapplication-TileImage" content="assets/img/icon/******-144x144.png" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
      <link rel="manifest" href="manifest.json" />
      <link rel="apple-touch-icon" href="assets/img/icon/******.png" />
      <link rel="icon" sizes="192x192" href="assets/img/icon/******-192x192.png" />
      <link rel="icon" href="favicon.ico" />
      <link rel="stylesheet" href="assets/stylesheets/main.min.css" />
    </>
  )
}
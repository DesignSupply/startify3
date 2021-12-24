import React from 'react';

export const HeadMeta = (props) => {
  return (
    <>
      <meta property="og:title" content={props.meta.title} />
      <meta property="og:description" content={props.meta.description} />
      <meta property="og:url" content={props.meta.url} />
      <meta property="og:type" content={props.meta.type} />
      <meta property="og:image" content={props.meta.ogpImage} />
      <meta name="twitter:title" content={props.meta.title} />
      <meta name="twitter:description" content={props.meta.description} />
      <meta name="twitter:url" content={props.meta.url} />
      <meta name="description" content={props.meta.description} />
      <link rel="canonical" href={props.meta.url} />
      <title>{props.meta.title}</title>
    </>
  );
}

import React from 'react';

export type PageMeta = {
  meta: {
    name: string,
    title: string,
    description: string,
    ogpImage: string,
    type: string,
    url: string,
  }
}

export const BodyScript: React.VFC<PageMeta> = (props) => {
  return (
    <>
      <script src="assets/js/main.min.js"></script>
    </>
  )
}

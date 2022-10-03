import React from 'react';

interface pageMetaInterface {
  meta: {
    name: string,
    title: string,
    description: string,
    ogpImage: string,
    type: string,
    url: string,
  }
}

export const BodyScript: React.VFC<pageMetaInterface> = (props) => {
  return (
    <>
      <script src="assets/scripts/main.min.js"></script>
    </>
  )
}

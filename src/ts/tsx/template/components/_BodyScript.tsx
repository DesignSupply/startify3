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

export const BodyScript: React.VFC<propsInterface> = (props) => {
  return (
    <>
      <script src="assets/scripts/main.min.js"></script>
    </>
  )
}

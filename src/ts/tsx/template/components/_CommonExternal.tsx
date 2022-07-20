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

export const CommonExternal: React.VFC<pageMetaInterface> = (props) => {
  return (
    <>
      <div className='l-external'></div>
    </>
  )
}
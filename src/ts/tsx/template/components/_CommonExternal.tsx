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

export const CommonExternal: React.VFC<PageMeta> = (props) => {
  return (
    <>
      <div className='l-external'></div>
    </>
  )
}
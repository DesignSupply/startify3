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

export const CommonExternal: React.VFC<propsInterface> = (props) => {
  return (
    <>
      <div className='l-external'></div>
    </>
  )
}
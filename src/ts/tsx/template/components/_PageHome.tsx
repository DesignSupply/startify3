import React from 'react';
import { PageHomeSection01 } from './_PageHomeSection01';

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

export const PageHome: React.VFC<propsInterface> = (props) => {
  const currentPage: string = props.meta.name;
  return (
    <>
      <main className='l-main p-page p-front-page'>
        <PageHomeSection01 pageName={currentPage} />
      </main>
    </>
  )
}
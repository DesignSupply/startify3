import React from 'react';
import { PageHomeSection01 } from './_PageHomeSection01.jsx';

export const PageHome = (props) => {
  const currentPage = props.meta.name;
  return (
    <>
      <main className='l-main p-page p-front-page'>
        <PageHomeSection01 page={currentPage}/>
      </main>
    </>
  );
}

import React from 'react';
import { PageHomeSection01 } from './_PageHomeSection01';

export class PageHome extends React.Component {
  constructor(props) {
    super(props)
    this.currentPage = props.meta.name
  }
  render(): JSX.Element {
    return (
      <>
        <main className='l-main p-page p-front-page'>
          <PageHomeSection01 page={this.currentPage} />
        </main>
      </>
    )
  }
}
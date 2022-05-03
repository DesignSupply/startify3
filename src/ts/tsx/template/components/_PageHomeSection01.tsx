import React from 'react';

export type PageSection = {
  pageName: string
}

export const PageHomeSection01: React.VFC<PageSection> = (props) => {
  return (
    <>
      <article className='p-section-01'>
        <section className='l-wrapper'>
          <div className='l-container'>
            <div className='l-inner'>
              <div className='__block-depth-1'>
                <div className='__block-depth-2'>
                  <div className='__block-depth-3'>
                    <div className='__block-depth-4'>
                      <div className='__block-depth-5'></div> 
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
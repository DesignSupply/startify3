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

export const CommonHeader: React.VFC<PageMeta> = (props) => {
  return (
    <>
      <header className='l-header'>
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
      </header>
    </>
  )
}
import React from 'react';

interface propsInterface {
  pageName: string
}

export const PageHomeSection01: React.VFC<propsInterface> = (props) => {
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
                      <div className='__block-depth-5' id='app'></div> 
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
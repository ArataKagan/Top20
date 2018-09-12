import React from 'react';


const Landing = () => (
  <section className='landing container-fluid'>
    <h3 className='hero-title'>Turn the music up!</h3>

    <section className='selling-points row-flex'>
      <div className='point col-md-4 col-sm-6 col-xs-12'>
        <div className='content content-1'>
          <h2 className='point-title'>Choose your music</h2>
          <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
      </div>
      <div className="clearfix visible-xs-block"></div>
      <div className='point col-md-4 col-sm-6 col-xs-12'>
        <div className='content content-2'>
          <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
          <p className='page-description'>No arbitrary limits. No distractions.</p>
        </div>
      </div>
      <div className="clearfix visible-xs-block"></div>
      <div className='point col-md-4 col-sm-6 col-xs-12'>
        <div className='content content-3'>
          <h2 className='point-title'>Mobile enabled</h2>
          <p className='point-description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;

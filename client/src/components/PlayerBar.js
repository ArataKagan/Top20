import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className='player-bar grid grid-vert-center grid-full-bleed '>
        <section className='controls  grid grid-space-between'>
            <span className='icon ion-md-skip-backward' onClick={this.props.handlePrevClick}></span>
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'} onClick={this.props.handleSongClick}></span>
            <span className='icon ion-md-skip-forward' onClick={this.props.handleNextClick}></span>
      </section>
      <section id='volume flex-reset'>
        <div className='icon ion-md-volume-low'></div>
        <input
          type='range'
          className='seek-bar'
          value={this.props.volume}
          max='1'
          min='0'
          step='0.01'
          onChange={this.props.handleVolumeChange}/>
        <div className='icon ion-md-volume-high'></div>
      </section>
    </section>
    );
  }
}

export default PlayerBar;

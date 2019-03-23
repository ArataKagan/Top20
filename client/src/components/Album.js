import React, { Component } from 'react';
import axios from 'axios';
import PlayerBar from './PlayerBar';
const API_KEY = 'NzI5NTMzY2ItYWE0Yy00YjUyLTkxYjItYzFmMWZlNzJjN2E3';

class Album extends Component {
  constructor(props){
    super(props);

    this.state = {
      album : null,
      currentSong: null,
      currentTime: 0,
      duration: 0,
      volume: 0,
      isPlaying: false,
      onHover: false
    };

    this.audioElement = document.createElement('audio');
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount(){
    axios.get('https://api.napster.com/v2.0/playlists/' + this.props.match.params.id + '/tracks?apikey=' + API_KEY + '&limit=20')
      .then(response => {
        console.log(response);
        this.setState({
          album: response.data.tracks
        })
      })
    
    // this.audioElement.src = this.state.album.songs[0].audioSrc;

    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime});
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration});
      },
      volumechange: e => {
        this.setState({ volume: this.audioElement.volume });
      }
    };

    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
  }

  componentWillUnmount(){
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  setSong(song) {
    this.audioElement.src = song;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = (this.state.currentSong === song);
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick(){
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex =  Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick(){
    const totalSongs = this.state.album.songs.length;
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(currentIndex + 1, totalSongs - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  formatTime(time){
    if(isNaN(time)){
      return '-:--'
      }
    const min = Math.floor(time/60);
    const sec = Math.round(time - min * 60);
    var result = min;
        result += ':' + (sec < 10 ? "0" + sec : sec);
    return result;
  };

  handleTimeChange(e){
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e){
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  onMouseEnter(url){
    this.setState({onHover: url});
  }

  onMouseLeave(){
    this.setState({onHover: false});
  }

  iconDisplay(url){
    console.log('icon display entered');
    if(this.state.onHover === url && this.state.isPlaying === true){
      return <span className="icon ion-md-pause"></span>
    } else if (this.state.onHover === url && this.state.isPlaying === false){
      return <span className="icon ion-md-play"></span>
    }
  }


  render() {

    let songId = [];
    let songImage = [];
    let songName = [];
    let songArtist = [];
    let songLength = [];
    let songURL = [];

    let album = this.state.album; 
    
    for( const key in album){
      let obj = album[key];
      songId.push(obj.albumId);
      songImage.push('http://direct.rhapsody.com/imageserver/v2/albums/' + obj.albumId + '/images/300x300.jpg');
      songName.push(obj.albumName);
      songArtist.push(obj.artistName);
      songLength.push(obj.playbackSeconds);
      songURL.push(obj.previewURL);
    }
    const songData = songId.map( (idValue, index) => {
      const image = songImage[index];
      const name = songName[index];
      const artist = songArtist[index];
      const length = songLength[index];
      const url = songURL[index];
      return (
        <div key={index} className='albumContainer'>
          <div className='imageContainer'>
            <img
              className='songImage' 
              src={image}
              onClick = {() => this.handleSongClick(url)} 
              onMouseEnter={() => this.onMouseEnter(url)}
              onMouseLeave={() => this.onMouseLeave()}
            />
            <div className='overlay'>
              <div className='hoverIcon'>{this.iconDisplay(url)}</div>
            </div>
              <p className='songName'>{name}</p>
              <p className='songArtist'>{artist}</p>
          </div>
        </div>
      )
    })

    
    return (
      <section className='album'>
       
        <div className='outerAlbumContainer'>
         {songData}
        </div>
        <footer className='footerstatic'>
          <PlayerBar
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.audioElement.currentTime}
            duration={this.audioElement.duration}
            volume={this.audioElement.volume}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={(e) => this.formatTime(e)}
          />
        </footer>
      </section>
    );
  }
}

export default Album;

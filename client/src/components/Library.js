import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import axios from 'axios';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: null };
  }

  componentDidMount(){
    axios.get('https://api.napster.com/v2.0/playlists?apikey=NzI5NTMzY2ItYWE0Yy00YjUyLTkxYjItYzFmMWZlNzJjN2E3')
    .then(response => {
      this.setState({
        albums: response.data.playlists
      })
    })
  }

  render(){
    
    
    for (var album in this.state.albums){
      var obj = this.state.albums[album];
      var albumName = obj.name;
      <div>{albumName}</div>

      // get album image
      for (var image in obj.images){
        var images = obj.images[image];
        var albumImage = images.url;
        <img src={albumImage} alt={album_image} />
      }
    }

    
    return (
      <section className='library'>
        {/* {this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <div className='photo-gallery col-sm-6 col-md-4'>
                <img src={album.albumCover} alt={album.title} className='album_image'/>
                <div>{album.title}</div>
                <div>{album.artist}</div>
                <div>{album.songs.length} songs</div> 
              </div>
            </Link>
          )
        } */}
      </section>
    );
  }
}

export default Library;

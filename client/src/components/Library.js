import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import albumData from './../data/albums';
import axios from 'axios';
const API_KEY = 'NzI5NTMzY2ItYWE0Yy00YjUyLTkxYjItYzFmMWZlNzJjN2E3';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { 
      albums: []
     };
  }

  componentDidMount(){
    axios.get('https://api.napster.com/v2.0/playlists?apikey=' + API_KEY)
    .then(response => {
      console.log(response.data);
      this.setState({
        albums: response.data
      })
    })
  }

  render(){
    console.log(this.state.albums);
    let albumName = [];
    let albumId = [];
    let albumImage = [];

    let playlists = this.state.albums.playlists;
    
    
    // loop over response and store name and image
    for (const key in playlists) {
      let obj = playlists[key];
        for(const imageKey in obj.images){
          let imageObj = obj.images[imageKey];
            albumName.push(obj.name);
            albumId.push(obj.id);
            albumImage.push(imageObj.url);
        }
    }
    
    // create children element 
    const albumData = albumImage.map( (imageValue, index) => {
      const names = albumName[index];
      const id = albumId[index];
      return (
        <Link to={`/album/${id}`} key={id}>
          <div key={imageValue} className='libraryItem'>
            <img src={imageValue} key={imageValue} />
            <p>{names}</p>
          </div>
        </Link>
      ); 
    })
    
    return (
      <section className='library'>
        {albumData}
      </section>
    );
  }
}

export default Library;

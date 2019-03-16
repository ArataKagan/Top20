import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import albumData from './../data/albums';
import axios from 'axios';
const API_KEY = 'NzI5NTMzY2ItYWE0Yy00YjUyLTkxYjItYzFmMWZlNzJjN2E3';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { 
      albums: [],
      album: []
     };
  }

  componentDidMount(){
    axios.get('https://api.napster.com/v2.0/playlists?apikey=' + API_KEY)
    .then(response => {
      this.setState({
        albums: response.data
      })
    })
  }

  render(){
    let albumName = [];
    let albumImage = [];
    
    // loop over response and store name and image
    for (const key in this.state.albums.playlists) {
      var obj = this.state.albums.playlists[key];
        for(const imageKey in obj.images){
          var imageObj = obj.images[imageKey];
            albumName.push(obj.name);
            albumImage.push(imageObj.url);
        }
    }
    
    // create children element 
    const albumData = albumImage.map( (value, index) => {
      const names = albumName[index];
      return (
        <div key={value}>
          <img src={value} key={value} />
          <p>{names}</p>
        </div>
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

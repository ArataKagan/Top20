import React, { Component } from 'react';
// Need to setup router to assign a path for each component
//import Route and Link from react-router-dom package
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            {/* Assign Link tag to navigate around different pages
            // but not reloading the whole pages*/}
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          {/* set exact if you don't want any other path to match
          for example, '/blabla' doesn't match but only '/' will
          show the Landing component */}
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          {/* set :slug so that any data matched with slug keyword
          is set to the URL and show the component  */}
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;

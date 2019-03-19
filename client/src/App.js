import React, { Component } from 'react';
/* Need to setup router to assign a path for each component*/
/*import Route and Link from react-router-dom package */
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header>
          <nav className = 'navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href='#'>Top 20</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className= 'navbar-nav mr-auto'>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Landing</Link>
                </li>
                <li className="nav-item">
                  <Link to='/library' className="nav-link">Library</Link>
                </li>
              </ul>
            </div>
          </nav>
          
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:id' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;

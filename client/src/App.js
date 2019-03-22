import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header>
          <nav className = 'navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href='/'>Top 20</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className= 'navbar-nav mr-auto'>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Library</Link>
                </li>
              </ul>
            </div>
          </nav>
          
        </header>
        <main>
          <Route exact path='/' component={Library} />
          <Route path='/album/:id' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;

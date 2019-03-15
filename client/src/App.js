import React, { Component } from 'react';
/* Need to setup router to assign a path for each component*/
/*import Route and Link from react-router-dom package */
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
// import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header>
          <nav>
            <ul>
              <Link to='/' >Landing</Link>
              <span> </span>
              <Link to='/library'>Library</Link>
            </ul>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          {/* <Route path='/album/:id' component={Album} /> */}
        </main>
      </div>
    );
  }
}

export default App;

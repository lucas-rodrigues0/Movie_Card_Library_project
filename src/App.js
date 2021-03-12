import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

const newMoviePath = '/Movie_Card_Library_project/movies/new';
const movieDetailsPath = '/Movie_Card_Library_project/movies/:id';
const editMoviePath = '/Movie_Card_Library_project/movies/:id/edit';

function App() {
  return (
    <Router>
      <div className="app-header">
        <h1 className="header-title">Movie Card Library CRUD Project</h1>
      </div>
      <Switch>
        <Route exact path="/Movie_Card_Library_project/" component={ MovieList } />
        <Route exact path={ newMoviePath } component={ NewMovie } />
        <Route exact path={ movieDetailsPath } component={ MovieDetails } />
        <Route exact path={ editMoviePath } component={ EditMovie } />
        <Route path="" exact component={ NotFound } />
      </Switch>
      <div className="new-movie">
        <Link to="/Movie_Card_Library_project/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    </Router>
  );
}

export default App;

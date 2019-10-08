import React, { Component } from 'react';
import './App.scss';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import FilmsList from './components/FilmsList/FilmsList';
import { NewFilm } from './components/NewFilm';
import { FormField } from './components/FormField';
import { FilmDetails } from './components/FilmDetails';
import { store, addNewFilm } from './store';

const API_URL = 'https://www.omdbapi.com/?apikey=2f4a38c9&t=';

export class App extends Component {
  state = {
    searchWord: '',
  };

  unsubscribe = null;

  componentDidMount() {
    this.searchFilm('spider');
    this.unsubscribe = store
      .subscribe(() => this.setState());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAddFilm = (newFilm) => {
    const { films } = store.getState();
    store.dispatch(addNewFilm({
      ...newFilm,
      id: films[films.length - 1].id + 1,
    }));
  };

  handleSearchChange = ({ target }) => {
    this.setState({ searchWord: target.value });
  };

  searchFilm = (searchWord) => {
    fetch(`${API_URL}${searchWord}`)
      .then(response => response.json())
      .then((data) => {
        const {
          Title,
          Plot,
          Poster,
          Website,
          imdbID,
        } = data;

        const newFilm = {
          id: imdbID,
          title: Title,
          description: Plot,
          imgUrl: Poster,
          imdbUrl: Website,
        };

        store.dispatch(addNewFilm(newFilm));
      });
  };

  render() {
    const { searchWord } = this.state;

    return (
      <HashRouter>
        <div className="page">
          <div className="content">
            <div className="box">
              <FormField
                value={searchWord}
                name="searchWord"
                placeholder="Type search word"
                label="Search film"
                onChange={this.handleSearchChange}
              />
              <button
                onClick={() => this.searchFilm(searchWord)}
                type="button"
                className="button is-primary"
              >
                Search film
              </button>
            </div>

            <Switch>
              <Route
                exact
                path="/"
                component={FilmsList}
              />
              <Route
                exact
                path="/film/:id"
                component={FilmDetails}
              />
            </Switch>
          </div>
          <div className="sidebar">
            <NewFilm onAdd={this.handleAddFilm} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

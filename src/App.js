import React, { Component } from 'react'
import Shelves from "./Components/Shelves"

import SearchPage from './Components/SearchPage'
import MainPage from './Components/MainPage'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  
  state = {
    books: []
  }

  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    )
  }
  

  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

  
    
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    )
  }

  

  render() {
    
    return (
    
      <div className="app">

        
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        
        <Route exact path="/shelves" render={() => (
          <Shelves
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchPage 
          changeShelf={this.changeShelf}
          books={this.state.books}
          />
        )}/>
        
      </div> 
    )
  }
}

export default BooksApp

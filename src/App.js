import React, { Component } from 'react'
import Shelves from "./Components/Shelves"

import SearchPage from './Components/SearchPage'
import MainPage from './Components/MainPage'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  
  // split books into multiple arrays to make tracking the state easier and faster
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],

  }

  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // put books in the right state array
      this.setState({ books: books || [], currentlyReading: books.filter(book => book.shelf === 'currentlyReading') || [], wantToRead: books.filter(book => book.shelf === 'wantToRead') || [], read: books.filter(book => book.shelf === 'read') || []}, ()=>console.dir(this.state)) 
    }
    ).catch(error=>console.log(error))
  }
  

  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  //update the state
  const moveBook = book;
  moveBook.shelf=shelf;
//select state key dynamically
    this.setState({
      [book.shelf] : this.state[book.shelf].filter(currentBook=>currentBook!=book),
      [shelf] : [...this.state[shelf], moveBook]

    })
   
  
    
    /* BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    ) */
  }

  

  render() {
    
    return (
    
      <div className="app">

        
        <Route exact path="/" render={() => (
          <MainPage

            {...this.state}
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

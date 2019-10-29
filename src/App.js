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
      // this.setState({ books: books || [], currentlyReading: books.filter(book => book.shelf === 'currentlyReading') || [], wantToRead: books.filter(book => book.shelf === 'wantToRead') || [], read: books.filter(book => book.shelf === 'read') || [] }, () => console.dir(this.state))

      this.setState({ books: books || []}, () => console.dir(this.state))
    }
    ).catch(error => console.log(error))
  }



  // changeShelf = (book, shelf) => {

  //   BooksAPI.update(book, shelf)
  //   //update the state
  //   const moveBook = book;
  //   moveBook.shelf = shelf;
  //   //select state key dynamically
  //   // figure out when i move the book from a shelf two actions - adding a book and removing from a shelf 
  //   this.setState((prevState ) => {
  //     debugger;
  //     return {
  //       [book.shelf]: prevState[book.shelf].filter(currentBook => currentBook.title !== book.title),
  //       [shelf]: [...prevState[shelf], moveBook]
  //     }
  //   })

    changeShelf = (book, shelf) => {

      BooksAPI.update(book, shelf)
      //update the state
      const moveBook = book;
      moveBook.shelf = shelf;
      //select state key dynamically
      // figure out when i move the book from a shelf two actions - adding a book and removing from a shelf 
      // i have one state books / my state is an object / inside 
      this.setState((prevState ) => {
        const otherBooks = prevState.books.filter(book => book.title !== moveBook.title)
        return {
          books: [...otherBooks, moveBook]
        }
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

            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />

        <Route exact path="/shelves" render={() => (
          <Shelves
          />
        )} />

        <Route exact path="/search" render={() => (
          <SearchPage
            changeShelf={this.changeShelf}
            books={this.state.books}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp

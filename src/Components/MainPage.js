import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Components/Book'
import Footer from '../Components/Footer'




const MainPage = ({ books, changeShelf }) => {

  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading') || []
  const wantToRead = books.filter(book => book.shelf === 'wantToRead') || []
  const read = books.filter(book => book.shelf === 'read') || []

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <div className="books-grid">
                {
                  currentlyReading.map(book => (

                    <li key={book.id} >
                      <Book
                        book={book}
                        changeShelf={changeShelf}


                        currentShelf="currentlyReading"
                      />
                    </li>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  wantToRead.map(book => (

                    <li key={book.id}>
                      <Book
                        // Passing book props to Book component
                        book={book}
                        changeShelf={changeShelf}
                        currentShelf="wantToRead"
                      />
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <div className="books-grid">
                {

                  read.map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        changeShelf={changeShelf}
                        currentShelf="read"
                      />
                    </li>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">


        <Link
          to="/search"
        >Add a book</Link>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage



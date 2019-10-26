import React/* ,{useState, useEffect}  */from "react"
/* import {getAll} from "../BooksAPI"
import { log } from "util";
 */



const Shelves = props => {
  console.log(props)
    return (
      <div className="bookshelf">HEEEY</div>
    );
  };



export default Shelves;

{/*{   
  this.state.matchedBooks.map(matchedBook => {
      /*
      * "shelf" variable should have the value "none" originally
      * as all books not included in the currently reading, want to read
      * and read shelves should have this 'none' state.
      */
      //let shelf = "none"
      /* 
      * Mapping through all the "books".
      * If a matched book does not belong to the books i.e. to 
      * a category ("shelf"), then this book's shelf will get 
      * the value "none". Otherwise, it gets the shelf value 
      * that the book already has in "books".
      */
     /* this.props.books.forEach(book => {
          if (book.id !== matchedBook.id) {
              matchedBook.shelf = "none"
          } else {
              shelf = book.shelf
          }
      })
      
      return(
          <li key={matchedBook.id}>
          <Book 
              book={matchedBook}
              changeShelf={this.props.changeShelf}
              currentShelf={shelf}
          />
      </li>

      )
  }
  )
} 
*/ }
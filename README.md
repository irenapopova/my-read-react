# MyReads Project

The project is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. The project is build with React and provides an API server and client library .


## Run the project

In the repository folder: 
        npm install
* start the development server with -  npm start


## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
* Currently Reading
* Want to Read
* Read

Each book has a control that lets the user select the shelf for that book. When the user select a different shelf, the book moves there.

The search page has a text input field that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their library.



## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [**SEARCH_TERMS.md**](SEARCH_TERMS.md). 




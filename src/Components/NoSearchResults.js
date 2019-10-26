import React, { Component } from 'react'
{/* transforming a class component into a functional one*/} 
function NoSearchResults () {
    
        return(
            <div className='no-search-results'>
                <h2>Sorry, your search returned no results.</h2>
                <h2>Try again, or return to home page.</h2>
            </div>
        )
    
}

export default NoSearchResults
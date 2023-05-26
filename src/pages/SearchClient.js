import React from 'react';
const SearchClient=(props)=>{
     const searchQuery = new URLSearchParams(props.location.search).get('q');
     console.log(searchQuery)
    return(
        <div>
            <p>search page</p>
        </div>
    )
}
export default SearchClient;
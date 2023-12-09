import React, { useContext } from "react"
import { KeywordContext } from '../context/KeywordContext';
import { SearchDispatchContext } from '../context/SearchDispatchContext';

// interface SearchProps {
//     value: string,
//     onChange: React.ChangeEventHandler<HTMLInputElement>
// }

function Search() {
    const keyword = useContext(KeywordContext);
    const dispatch = useContext(SearchDispatchContext);

    return  (<div style={{background: '#fff', color: '#000'}}>
    <label htmlFor="searchInput">Search:</label>
    <input type="search" id="searchInput" value={keyword} onChange={e => dispatch(
        {
          type: 'UPDATE_SEARCH',
          payload: e.target.value
        }
      )}></input>
  </div>)
}


export default Search;
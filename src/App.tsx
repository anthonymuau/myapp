import { useState, StrictMode, useMemo, useCallback, useReducer } from 'react'
import './App.css'
import Search from './components/Search';
import Results from './components/Results';
import { getRandomStrings, searchFoodItems } from './data/fake';
import React from 'react';
import { KeywordContext } from './context/KeywordContext';
import { SearchDispatchContext } from './context/SearchDispatchContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  //const [keyword, setKeyword] = useState ('');
  const [amount, setAmount] = useState (10000);
  //const items = useMemo(() => searchFoodItems(keyword), [keyword]);
  const bigQuery = useMemo(() => getRandomStrings(amount),[amount]);

  const reductor = (state, action) => {
    switch(action.type) {
      case 'UPDATE_SEARCH':
        return {
          ...state,
          keyword: action.payload,
          items: searchFoodItems(action.payload)
        }
    }
  }


  const [state, dispatch] = useReducer(reductor, {
    keyword: '',
    items: []
  });

  // const onKeywordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(event.target.value);
  //   //searchFoodItems(keyword);
  //   //return keyword;
  // },[])

  return (
    <StrictMode>
      <KeywordContext.Provider value={state?.keyword}>
      <SearchDispatchContext.Provider value={dispatch}>
       <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <input value={amount} type="number" onChange={e => setAmount(parseInt(e.target.value))} />
      <div data-theme={isDark}>test</div>
      <Search />
      <Results items={state.items} />
      {/* <Results items={bigQuery} /> */}
      </SearchDispatchContext.Provider>
      </KeywordContext.Provider>
    </StrictMode>
  )
}

export default App

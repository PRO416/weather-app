import React from 'react'

const Search = (props) => {

  return (
    <>
      <input onChange={e => props.handleCityChange(e.target.value)} type="text" placeholder="enter city"/>
      <input type="button" onClick={props.commitCityChange} value="search" />
    </>
  )
};

export default Search;

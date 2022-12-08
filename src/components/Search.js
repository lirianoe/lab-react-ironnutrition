
import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

  

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.name} type="text" onChange={
        props.change
      } />
    </>
  );
}

export default Search;
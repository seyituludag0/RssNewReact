import React, { useState } from 'react'
import "./styles.css"
import Button from '@mui/material/Button';
import Data from '../Data/Data';

export default function NewsComponents() {

    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var value = e.target.value.toLowerCase();
    setInputText(value);
  };

  const clearTextInput = () => {
    setInputText("")
  }

  return (
    <div className="main">
      
      <h1 style={{textAlign:"center"}}>All Feed</h1>
      <div className="search">
        <label className="input">
          <input className="input__field" value={inputText} onChange={inputHandler}  />
          <span className="input__label">Search</span>
        </label>

        {inputText === "" ? null:(
        <>
        <Button variant="text">Save</Button>
        <Button variant="text">Check Now</Button>
        </>)}

      </div>
      <Data input={inputText} />
    </div>
  )
}

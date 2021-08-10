import {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';




function App() {
  const [word, setWord] =  useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }
  
  return (
    <div className="App">
      <h1>Images Gallery</h1>
      <Header title="Images gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit = {handleSearchSubmit}></Search>
    </div>
  );
}

export default App;

import {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () =>  {
  const [word, setWord] =  useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${}&client_id=${UNSPLASH_KEY}`)
      .then( (res) => res.json() )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      setWord('');
  };

  return (
    <div className="App">
      <h1>Images Gallery</h1>
      <Header title="Images gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit = {handleSearchSubmit}></Search>
    </div>
  );
}

export default App;

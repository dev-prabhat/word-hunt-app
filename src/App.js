import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { Container } from '@material-ui/core';
import Header from './Components/Header/Header';
import Definitions from './Components/Definitions/Definitions';


function App() {
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("en")
  const [meanings, setMeanings] = useState([])

  const DictonaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data.data)
      // console.log(meanings)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    DictonaryApi()
  }, [word, category])

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header  {...{ category, setCategory, word, setWord }} />
        <Definitions {...{ word, category, meanings }} />
      </Container>
    </div>
  );
}

export default App;

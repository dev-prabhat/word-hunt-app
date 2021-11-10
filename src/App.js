import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { Container } from '@material-ui/core';
import Header from './Components/Header/header';

function App() {
  const [meanings, setMeanings] = useState([])

  const DictonaryApi = async () => {
    try {
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/fire")
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    DictonaryApi()
  }, [])

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header />
      </Container>
    </div>
  );
}

export default App;

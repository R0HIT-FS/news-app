import './App.css';
import News from './components/News';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const [progress, setprogress] = useState(0)
  const [mode, setMode] = useState('light')
  const apiKey=process.env.REACT_APP_NEWS_API

  const toggleMode=()=>{
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

    return (
      <>
      <Router basename='news-app'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setprogress(0)}
      />
      <NavBar toggleMode={toggleMode}/>
      <Routes>
          <Route exact path="/news-app" element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="general" pageSize={6} country="in" category="general" />}></Route>
          <Route exact path="/business"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="business" pageSize={6} country="in" category="business" />}></Route>
          <Route exact path="/entertainment"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="entertainment" pageSize={6} country="in" category="entertainment" />}></Route>
          <Route exact path="/health"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="health" pageSize={6} country="in" category="health" />}></Route>
          <Route exact path="/science"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="science" pageSize={6} country="in" category="science" />}></Route>
          <Route exact path="/sports"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="sports" pageSize={6} country="in" category="sports" />}></Route>
          <Route exact path="/technology"element={<News toggleMode={toggleMode}  setprogress={setprogress} apiKey={apiKey}   key="technology" pageSize={6} country="in" category="technology" />}></Route>
      </Routes>
      </Router>
      </>    
    )
  
}

export default App;
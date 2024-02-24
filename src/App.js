import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Content from './Components/Content';

function App() {
  const[loading,setLoading] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <Content/>
    {loading && <h1>Loading...</h1>}

    </div>
  );
}

export default App;

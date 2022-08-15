import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import { useState } from 'react';

function App() {
  const [theme, setTheme]= useState("light");
  return (
    <div className="App">
      <h2>Theme is {theme}</h2>
     <Button colorScheme="green" variant={"outline"} onClick={() => {
      setTheme(theme==="light" ? "dark":"light")
     }}>Click Me</Button>
    </div>
  );
}

export default App;

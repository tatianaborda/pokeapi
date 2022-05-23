import Home from './Home.js';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Results from './Results.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/pokeapi" element={<Home/>} />
        <Route exact path="/results" element={<Results/>} />
        <Route exact path="/*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;


import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
        <div className='App'>
        
        <Router>
        <Navbar/>
        <Routes>
        <Route  path="/" element = {<Home/>}/>
        <Route  path="/products" element = {<Products/>}/>
        <Route  path="/products/:id" element = {<Product/>}/>

       
        
        </Routes>
        </Router>

        </div>
  );
}

export default App;

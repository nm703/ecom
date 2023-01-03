
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
        <>
        <Navbar/>
        <Routes>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/products" component = {Products}/>
        <Route exact path="/products/:id" component = {Product}/>

       
        
        </Routes>
        

        </>
  );
}

export default App;

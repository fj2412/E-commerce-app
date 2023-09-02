import React from "react";
import { Container } from "react-bootstrap";
import {   
  BrowserRouter,
  Route,
  Routes 
} from "react-router-dom";
 
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ShippingScreen from "./screens/ShippingScreen";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header/>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route index={true} path="/" element={<HomeScreen/>}/>
              <Route path='/product/:id' element={<ProductScreen/>}/>              
              <Route path='/cart' element={<CartScreen/>}/>
              <Route path='/login' element={<LoginScreen/>}/>
              <Route path='/register' element={<RegisterScreen/>}/>
              <Route path='/shipping' element={<ShippingScreen/>}/>
            </Routes>
          </Container>
        </main>
    </BrowserRouter>
    <Footer />
    <ToastContainer/>
    </div>
  );
};

export default App;

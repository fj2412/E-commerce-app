import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {   
//   BrowserRouter,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { HelmetProvider } from 'react-helmet-async'
import store from './store.js'

// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route index={true} path="/" element={<HomeScreen/>}/>
//       <Route path='/product/:id' element={<ProductScreen/>}/>
//     </Route>
//   )
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <App/>
      </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();

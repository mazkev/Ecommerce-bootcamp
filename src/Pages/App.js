import React from 'react';
import '../Assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, FormRegist,Homepage, Home,PageRecomend, PageWishlist,Profile} from '.';
import store from '../Store/Store'
import { Provider } from 'react-redux';
import '../Assets/css/index.css';

function App() {
  

  return (
    <Provider store={store}>
    <Router>
    
    <Routes>
    
    <Route path="/" element={<Homepage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/FormRegist" element={<FormRegist />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/PageRecomend" element={<PageRecomend />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/PageWishlist" element={<PageWishlist />} />
    
    
    </Routes>

    </Router>
    </Provider>
  );
}

export default App;

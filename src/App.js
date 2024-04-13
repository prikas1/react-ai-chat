
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="center-container">
      <div className="mobile-container">
     <div className='components'>
     <Header />
     <Middle />
      <Footer />
    </div>
   </div>
    </div>
    </div>
  );
}

export default App;

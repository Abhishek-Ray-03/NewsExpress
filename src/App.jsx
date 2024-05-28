import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar';
import NewsBoard from './components/Newsboard';
import Newshead from './components/Newshead';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <div style={{ backgroundColor: '#f5ebdc'}}>
       <Navbar setCategory={setCategory}></Navbar>
       <Newshead></Newshead>
       <NewsBoard category={category}></NewsBoard>
       <Footer/>
    </div>
  )
};
export default App;
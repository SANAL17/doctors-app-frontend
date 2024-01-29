
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Alldoc from './Component/Alldoc';

import Footer from './Component/Footer';
import Header from './Component/Header';
import ViewDoc from './Component/ViewDoc';
import DocImage from './Component/DocImage';

function App() {
  return (
    <div className="App">
     <Header/>
    <DocImage/>
    <section>
    <Routes>

        <Route path='/' element={<Alldoc/>}/>
        <Route path='/view/:id' element={<ViewDoc/>}/>

      </Routes>
    </section>

     

     <Footer/>
    </div>
  );
}

export default App;

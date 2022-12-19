import './css/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Display from './components/pages/Display';
import UpdateDelete from './components/pages/UpdateDelete';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Info from './components/pages/Info';
import About from './components/pages/About';
import Gallery from './components/common/Gallery';
import Footer from './components/common/Footer';
import Contact from './components/pages/Contact';
import AddMineral from './components/pages/AddMineral';
import UpdateMineral from './components/pages/UpdateMineral';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/add' element={<Protected Cmp={AddMineral} />} />
          <Route path='/update' element={<Protected Cmp={UpdateMineral} />} />
          <Route path='/' element={<Gallery />} />
          <Route path='/all' element={<Display />} />
          <Route path='/delete' element={<UpdateDelete />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

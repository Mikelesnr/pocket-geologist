import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Header from './Header';
import Register from './Register';
import Login from './Login';
import Info from './Info';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import AddMineral from './AddMineral';
import UpdateMineral from './UpdateMineral';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/add' element={<Protected Cmp={AddMineral} />} />
          <Route path='/update' element={<Protected Cmp={UpdateMineral} />} />
          <Route path='/' element={<Gallery />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

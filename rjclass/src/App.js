import './App.css';
import Container from './Components/Container.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/home';
import Topic from './Components/topic';

const routes = [
  {path: '/', 
  element: <Home/>},
  {path: '/topic', 
  element: <Topic/>},
  {path: '/product', 
  element: <Container/>},
]

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element = {item.element}></Route>
            ))}
            {/* <Route path="/product" element={<Container/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/topic" element={<Topic/>} /> */}
          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

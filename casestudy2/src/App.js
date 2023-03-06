import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { createStoreHook } from 'react-redux';
import RootReducer from '../src/Utils/RootReducer';

function App() {

  const appStore = createStoreHook(RootReducer);

  return (
    <div className="App" store={appStore}>
      <Header></Header>
      <Container></Container>
    </div>
  );
}

export default App;

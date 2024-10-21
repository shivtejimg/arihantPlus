import React from "react";
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import RoutesComponent from './components/RotuesComponent/RoutesComponent';
import "swiper/css";
import "swiper/css/pagination";

function App() {

  return (
    <Provider store={store} >
      <RoutesComponent />
    </Provider>
  )
}

export default App

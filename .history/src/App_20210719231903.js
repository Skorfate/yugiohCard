import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import { CircularProgress } from '@material-ui/core';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Ruta from './components/ruta/ruta.component';

const Home = lazy(() => import('./page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      <CircularProgress/>
    </div>
  )

function App() {
  return (
        <BrowserRouter>
        <Header/>
          <Ruta/>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;

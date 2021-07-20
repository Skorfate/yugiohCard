import logo from './logo.svg';
import './App.css';
import Ruta from './components/Ruta/Ruta.component';
import { HashRouter, Route, Switch, Router } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import { CircularProgress } from '@material-ui/core';

const Home = lazy(() => import('./page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      <CircularProgress />
    </div>
  )

function App() {
  return (
      <HashRouter>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Switch>
                <Route exact path='/' component={Home}/>          
            </Switch>
      </HashRouter>
  );
}

export default App;

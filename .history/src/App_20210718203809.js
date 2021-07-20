import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>        
          <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                    <Route exact path='/' component={Home}/>          
              </Switch>
          </Suspense>
        </BrowserRouter>
  );
}

export default App;

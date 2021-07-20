import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import { CircularProgress } from '@material-ui/core';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

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
          <Suspense fallback={loading}>
              <Switch>
                    <Route exact path='/' component={Home}/>          
              </Switch>
          </Suspense>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;

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
      <div>
        <h4>Holas</h4>
        <BrowserRouter>
        <h4>Holas</h4>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full md:w-2/3 lg:w-2/3 bg-grey">
                <div className="p-6 md:p-8 lg:p-8 lg:border-b border-red-100">
                    <div className="portfolio">
                        <h2 className="text-base font-bold uppercase text-green mb-4">Portfolio</h2>
                        
                    </div>
                </div>
                <div className="p-6 md:p-8 lg:p-8">
                    <div className="testimonials mb-8">
                        <h2 className="text-base font-bold uppercase text-green mb-2">Testimonials</h2>
                        <div>
                           
                        </div>
                    </div>
                    <div className="expertise">
                        <h2 className="text-base font-bold uppercase text-green mb-2">Area of Expertise</h2>
                        <div className="flex flex-wrap">
                            
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
              <Switch>
                  <Route exact path='/' component={Home}/>          
              </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;

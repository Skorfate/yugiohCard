import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch, Router } from 'react-router-dom';

const Home = lazy(() => import('../../page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      <CircularProgress />
    </div>
  )

const Ruta = () => {
    return (
        <>
            <Suspense fallback={loading}></Suspense>
            <Switch>
                <Route exact path='/' component={Home}/>          
            </Switch>
        </>
    )
}

export default Ruta
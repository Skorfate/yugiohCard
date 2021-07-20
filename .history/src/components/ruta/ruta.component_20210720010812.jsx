import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch, Router } from 'react-router-dom';

const Home = lazy(() => import('../../page/Home/Home'));
const About = lazy(() => import('../../page/about/About'));

const loading = (
    <div className="pt-3 text-center">
      <CircularProgress />
    </div>
  )

const Ruta = () => {
    return (
        <>
            <Suspense fallback={loading}>
                <Switch>
                    <Route exact path='/sobre' component={About}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </Suspense>
        </>
    )
}

export default Ruta;
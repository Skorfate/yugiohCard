import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { HashRouter, Route, Switch, Router } from 'react-router-dom';

const Home = React.lazy(() => import('../../page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      <CircularProgress />
    </div>
  )

const Ruta = () => {
    return (
        <Router>
          <React.Suspense fallback={loading}></React.Suspense>
            <Switch>
                <Route exact path='/' component={Home}/>          
            </Switch>
        </Router>
    )
}

export default Ruta
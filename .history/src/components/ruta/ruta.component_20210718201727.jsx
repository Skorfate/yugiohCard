import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('../../page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      
    </div>
  )

const Ruta = () => {
    return (
        <HashRouter>
          <React.Suspense fallback={loading}></React.Suspense>
            <Switch>
                <Route exact path='/' component={Home}/>          
            </Switch>
        </HashRouter>
    )
}

export default Ruta
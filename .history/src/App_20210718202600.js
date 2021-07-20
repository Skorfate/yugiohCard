import logo from './logo.svg';
import './App.css';
import Ruta from './components/Ruta/Ruta.component';
import { HashRouter, Route, Switch, Router } from 'react-router-dom';

const Home = lazy(() => import('../../page/Home/Home.page'));


const loading = (
    <div className="pt-3 text-center">
      <CircularProgress />
    </div>
  )

function App() {
  return (
      <HashRouter>
            <Suspense fallback={loading}></Suspense>
            <Switch>
                <Route exact path='/' component={Home}/>          
            </Switch>
      </HashRouter>
  );
}

export default App;

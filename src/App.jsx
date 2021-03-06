import React, { Component, Suspense } from 'react';
import { Route, Switch, /*Redirect*/ } from 'react-router-dom'; //Link без доп классов


import routes from './routes';
import Layout from './components/shared/Layout';
import Loader from './components/shared/Loader';

// import Home from './views/Home';
// import Movies from './views/Movies';
// import MoviesDetails from './views/MoviesDetails';
// import NotFound from './views/NotFound';

import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  render(){
    
    return (
      <Layout>
        <Suspense fallback={<Loader/>}>
          <Switch>
            {routes.map(route => <Route key={route.path} {...route} />)}
            {/* <Redirect to='/' /> */}
          </Switch>
        </Suspense>
      </Layout>
    );
  }
  
}

export default App;

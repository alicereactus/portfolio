import React from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  const location = useLocation()

  return (
    <div className='App'>
        <Header />
        <Switch location={location} key={location.pathname}>
          <Route path='/main'
            exact component={Main} />
          <Route path='/skills'
            exact component={Skills} />
          <Route path='/projects'
            exact component={Projects} />
        </Switch>
        {/* <Contacts /> */}
        <Footer />
      </div>
  );
}

export default withRouter(App);

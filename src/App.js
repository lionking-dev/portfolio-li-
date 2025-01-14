import React, { useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage, AchievementPage } from './pages'
import { Achievement, BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import './App.css'



function App() {


  const { theme } = useContext(ThemeContext);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/achievements" exact component={AchievementPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;

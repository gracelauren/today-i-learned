import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from './components/home.js';
import Post from './components/post.js';
import NotFound from './components/404.js';

const App = () => (
  <Router>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:slug" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
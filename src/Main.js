
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './Articles';
import ArticlesDetails from './Articles/Details.js';
import FavouriteList from './Articles/FavouriteList.js';


const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/articles' />
    <Route exact path='/articles' render={() => <List /> } />
    <Route exact path='/article/:id' render={() => <ArticlesDetails /> } />
    <Route exact path='/favourite' render={() => <FavouriteList /> } />

  </Switch>
);

export default Main;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensepage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ExpenseDashBoardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

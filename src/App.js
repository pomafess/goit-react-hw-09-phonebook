import React , { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import Navbar from './components/Navbar';
import PrivatRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { getCurrentUser } from './redux/auth/auth-operations';

import s from './App.module.css'

const HomePage = lazy(() =>
import('./pages/HomePage'),
);
const RegisterPage = lazy(() =>
import('./pages/RegisterPage'),
);
const LoginPage = lazy(() =>
import('./pages/LoginPage'),
);
const PhonebookPage = lazy(() =>
import('./pages/PhonebookPage'),
);
const NotFoundPage  = lazy(() =>
import('./pages/NotFoundPage'),
);

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  return (
    <>
      <Navbar />
          <div className={s.container}>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicRoute path="/register" restricted
              redirectTo="/contacts" component={RegisterPage} />
            <PublicRoute path="/login" restricted
              redirectTo="/contacts" component={LoginPage} />
            <PrivatRoute path="/contacts" restricted
              redirectTo="/login" component={PhonebookPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </Suspense>
        </div>
    </>
  );
}



export default App;

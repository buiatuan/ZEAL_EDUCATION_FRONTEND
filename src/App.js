import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './components/css/materialize.css'
import './components/css/style.css'
import './components/css/bootstrap.css'
import './components/css/font-awesome.min.css'


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (

        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>

    );
  }
}

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default class App extends Component {
  static displayName = App.name;
  componentDidUpdate() {
    var scriptJquery = document.createElement("script");
    scriptJquery.src = "./js/main.min.js";
    scriptJquery.class = "external-script";
    var scriptBootstrap = document.createElement("script");
    scriptBootstrap.src = "./js/bootstrap.min.js";
    scriptBootstrap.class = "external-script";
    document.head.appendChild(scriptJquery);
    document.head.appendChild(scriptBootstrap);
    
    var scriptMaterialize = document.createElement("script");
    scriptMaterialize.src = "./js/materialize.min.js";
    scriptMaterialize.class = "external-script";
    document.head.appendChild(scriptMaterialize);
    var scriptCustom = document.createElement("script");
    scriptCustom.src = "./js/custom.js";
    scriptCustom.class = "external-script";
    document.body.appendChild(scriptCustom);
  }
  componentDidMount() {
    var scriptJquery = document.createElement("script");
    scriptJquery.src = "./js/main.min.js";
    scriptJquery.class = "external-script";
    var scriptBootstrap = document.createElement("script");
    scriptBootstrap.src = "./js/bootstrap.min.js";
    scriptBootstrap.class = "external-script";
    document.head.appendChild(scriptJquery);
    document.head.appendChild(scriptBootstrap);

    var scriptMaterialize = document.createElement("script");
    scriptMaterialize.src = "./js/materialize.min.js";
    scriptMaterialize.class = "external-script";
    document.head.appendChild(scriptMaterialize);
    var scriptCustom = document.createElement("script");
    scriptCustom.src = "./js/custom.js";
    scriptCustom.class = "external-script";
    document.body.appendChild(scriptCustom);
  }
  render() {
    return (
      <Routes>
        {" "}
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}{" "}
      </Routes>
    );
  }
}

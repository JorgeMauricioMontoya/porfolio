import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./config";

const Router = () => {
  return (
    <div className="bg-gray-100">
        <Switch>
          {routes.map((routeItem, idx) => {
            return (
              <Route
                key={idx}
                path={routeItem.path}
                exact={routeItem.exact}
                component={routeItem.component}
              />
            );
          })}
           <Redirect path={'*'} to="/profile" />
        </Switch>
    </div>
  );
};

export default Router;

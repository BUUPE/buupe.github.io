import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthUserContext } from '../../api/Session';
 
import * as ROUTES from '../../constants/routes';

import MainLanding from "../../pages/main-site/Landing";
import Panel from "../../pages/main-site/Panel";
import About from "../../pages/main-site/About";
import Contact from "../../pages/main-site/Contact";
import Members from "../../pages/main-site/Members";
import Events from "../../pages/main-site/Events";
import NotFound from "../../pages/main-site/404";
import Login from "../../pages/main-site/Login";
 
 
const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);
 
const NavigationAuth = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={MainLanding} />
    <Route exact path={ROUTES.ABOUT} component={About} />
    <Route exact path={ROUTES.CONTACT} component={Contact} />
    <Route exact path={ROUTES.MEMBERS} component={Members} />
    <Route exact path={ROUTES.EVENTS} component={Events} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
	<Route exact path={ROUTES.PANEL} component={Panel} />
    <Route component={NotFound} />
  </Switch>
);
 
const NavigationNonAuth = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={MainLanding} />
    <Route exact path={ROUTES.ABOUT} component={About} />
    <Route exact path={ROUTES.CONTACT} component={Contact} />
    <Route exact path={ROUTES.MEMBERS} component={Members} />
    <Route exact path={ROUTES.EVENTS} component={Events} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
    <Route component={NotFound} />
  </Switch>
);
 
export default Navigation;
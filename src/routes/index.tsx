import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage } from '../pages';
import DashBoardPage from '../pages/dashboard/Dashboad';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashBoardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

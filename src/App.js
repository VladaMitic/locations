import { Route, Switch, Redirect } from 'react-router-dom';

import {HomePage} from './pages/HomePage';
import {Locations} from './pages/Locations';
import {LocationDetail} from './pages/LocationDetail';
import {Layout} from './components/layout/Layout';
import {NotFound} from './pages/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
        <Route path="/locations/:locationId">
          <LocationDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

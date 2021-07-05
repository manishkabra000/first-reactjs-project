import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUps";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

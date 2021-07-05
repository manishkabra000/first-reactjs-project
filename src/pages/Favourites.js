import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites. Try adding some!!</p>;
  } else {
    content = <MeetUpList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;

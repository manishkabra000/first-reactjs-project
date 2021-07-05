import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavorites: 0,
  addFavorite: (favouriteMeetup) => {},
  removeFavorite: (meetUpId) => {},
  isFavorite: (meetUpId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavoriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavoriteHandler(meetUpId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetUpId);
    });
  }
  function isFavoriteHandler(meetUpId) {
    return userFavourites.some((meetup) => meetup.id === meetUpId);
  }

  const context = {
    favourites: userFavourites,
    totalFavorites: userFavourites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;

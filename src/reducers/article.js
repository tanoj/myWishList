import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from '../constants/ActionTypes'
import { read_cookie } from 'sfcookies';

const checkforFavourite = (items, favArt) => {
  items.map((item1) => {
    favArt.map((item2) => {
      if(item1.id === item2.id) {
        item1.favourite = true;
       }
    });
  });
  return items;
}

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ARTICLE_SUCCESS:
    const favouriteArticles = read_cookie('article');
    let items = action.articles && action.articles.map((item, index) => {
      item.id = index+1;
      item.favourite = false;
      return item;
    });
    items = favouriteArticles.length ? checkforFavourite(items, favouriteArticles) : items;
      return {
        ...state,
        isLoading: false,
        items,
      };
    case FETCH_ARTICLE_FAILURE: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

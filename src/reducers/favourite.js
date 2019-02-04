import {
  FAVOURITE_ARTICLE_ADDED
  } from '../constants/ActionTypes'
import { bake_cookie, read_cookie } from 'sfcookies';
  

export default (state = [], action) => {
  let articles = null;
  state = read_cookie('article');
  switch (action.type) {
    case FAVOURITE_ARTICLE_ADDED:
    articles = [...state, action.article];
    bake_cookie('article', articles);
    return articles;
    default:
      return state;
  }
}
  
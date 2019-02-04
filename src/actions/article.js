import {
  FAVOURITE_ARTICLE_ADDED,
} from '../constants/ActionTypes';


export const fetchArticles = () => ({
  type: 'FETCH_ARTICLE_REQUEST',
});

export const favouriteArticle = article => {
  return (dispatch) => {
  dispatch({
    type: FAVOURITE_ARTICLE_ADDED,
    article
  })
 }
}

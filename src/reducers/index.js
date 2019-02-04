import {combineReducers} from 'redux';
import articles from './article';
import favourite from './favourite';


export default combineReducers({
  articles,
  favourite,
})

import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchArticles() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );

  yield put({ type: "FETCH_ARTICLE_SUCCESS", articles: json.articles, });
}

function* actionWatcher() {
  yield takeLatest('FETCH_ARTICLE_REQUEST', fetchArticles)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
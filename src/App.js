import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import reducers from './reducers';
import Main from './Main';
import rootSaga from './saga';
import './App.css';
import 'antd/dist/antd.css';


const client = new ApolloClient({
  uri: 'https://jsonplaceholder.typicode.com/posts/graphql',
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  ReduxThunk,
  sagaMiddleware,
];


const store = createStore(
  reducers, {}, applyMiddleware(...middlewares)
);


sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;

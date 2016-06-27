
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import Pages from 'pages';
import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Pages.Root} >
        <IndexRoute component={Pages.Home} />
        <Route path="/about" component={Pages.About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

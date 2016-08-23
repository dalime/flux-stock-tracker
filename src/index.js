import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import SymbolSearch from './components/SymbolSearch';
import OneSymbol from './components/OneSymbol';

render((
  <Router history={browserHistory}>
    <Route path="/" component={SymbolSearch} />
    <Route path="/:id" component={OneSymbol} />
  </Router>
), document.getElementById('root')
)

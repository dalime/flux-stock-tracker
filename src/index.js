import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

//import Main from './components/Main';
import App from './components/App';
import SymbolSearch from './components/SymbolSearch';
//import Symbols from './components/Symbols';
import OneSymbol from './components/OneSymbol';

// console.log ('render:', render);

render((
  <Router history={browserHistory}>
    <Route path="/" component={SymbolSearch} />
    <Route path="/:symbol" component={OneSymbol} />
  </Router>
), document.getElementById('root')
)


{/* <Route path='/' component={Main}>
<IndexRoute component={App} />
<Route path='search' component={SymbolSearch} />
<Route path='quotes' component={Symbols} />
<Route path='quotes/:symbol' component={OneSymbol} />
</Route> */}

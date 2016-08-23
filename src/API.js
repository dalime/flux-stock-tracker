import ServerActions from './actions/ServerActions';
import jsonp from 'jsonp';

const API = {
  getLookup(text) {
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${text}`;
    jsonp(url, function (err, data) {
    ServerActions.receiveLookups(data);
    })
  },
  getDetails(text) {
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${text}`;
    jsonp(url, function (err, data) {
    ServerActions.receiveDetails(data);
    })
  }
}

export default API;

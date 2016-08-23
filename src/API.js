import ServerActions from './actions/ServerActions';
import parser from 'json-parser';
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
  },
  getChart(text) {
    let url = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/jsonp?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22' + text + '%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D';
    jsonp(url, function(err, data) {
    ServerActions.receiveChart(data);
    })
  }
}

export default API;

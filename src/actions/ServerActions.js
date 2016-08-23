import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveLookups(lookups) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_LOOKUPS',
      lookups
    })
  },
  receiveDetails(details) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      details
    })
  },
  receiveChart(data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CHART',
      data
    })
  }
}

export default ServerActions;

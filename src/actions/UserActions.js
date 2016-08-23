import API from '../API'

const UserActions = {
  getLookup(text) {
    API.getLookup(text);
  },
  getDetails(text) {
    API.getDetails(text);
  },
  getChart(text) {
    API.getChart(text);
  }
}

export default UserActions;

import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _data;

class ChartStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_CHART':
          _data = action.data.Elements[0].DataSeries.close.values;
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getChart() {
    return _data;
  }
}

export default new ChartStore();

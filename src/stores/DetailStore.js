import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _details = [];

class DetailStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_DETAILS':
          _details = action.details;
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

  getDetails() {
    return _details;
  }
}

export default new DetailStore();

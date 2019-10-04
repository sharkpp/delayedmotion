"use struct";

const EventEmitter = require('events');

class NetworkModel {

  constructor() {
    this._ev = new EventEmitter();
    this._handleNetworkChange = this.handleNetworkChange.bind(this);
    window.addEventListener('online',  this._handleNetworkChange);
    window.addEventListener('offline', this._handleNetworkChange);
  }

  handleNetworkChange(e) {
    //console.log('handleNetworkChange',[e,navigator.onLine]);
    this._ev.emit(this.EventType.Change, 'online' === e.type);
  }

  on(name, listener) {
    this._ev.on(name, listener);
  }

  off(name, listener) {
    this._ev.removeListener(name, listener);
  }

  isOnline() {
    return navigator.onLine;
  }

};

NetworkModel.prototype.EventType = {
  Change: 'change',
};

export default NetworkModel;

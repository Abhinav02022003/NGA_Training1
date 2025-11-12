const Dispatcher = {
  _callbacks: [],

  register(callback) {
    this._callbacks.push(callback);
  },

  dispatch(action) {
    this._callbacks.forEach((callback) => callback(action));
  },
};

export default Dispatcher;

class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = []

  }

  addListener(listeners){

    this.listeners.push(listeners);
    const removeListener = () => {
      this.listeners =this.listeners.filter(l => listeners !==l);
    }
  return removeListener
  }

  setState(state){
    this.state = state;
    for (const listeners of this.listeners) {
      listeners.call(this, state);

    }
  }

  getState(state){
    return this.state
  }
}

export default Store;

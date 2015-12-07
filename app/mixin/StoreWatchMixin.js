/**
 * Created by pheadra on 7/7/15.
 */
import React from 'react'

var StoreWatchMixin = function(store, cb) {
  return {
    getInitialState: function(){
      return cb();
    },
    componentDidMount: function() {
      store.addChangeListener(this._onChange)

      if(this.AfterDidMount){
        this.AfterDidMount();
      }
    },
    componentWillUnmount: function() {
      store.removeChangeListener(this._onChange)
    },
    _onChange: function() {
      this.setState(cb())

      if(this.AfterChange){
        this.AfterChange();
      }
    }
  }
}

export default StoreWatchMixin

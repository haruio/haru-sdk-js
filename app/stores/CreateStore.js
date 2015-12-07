/**
 * Created by pheadra on 7/12/15.
 */
import { EventEmitter } from 'events'
import shallowEqual from 'react-pure-render/shallowEqual'
const CHANGE_EVENT = 'change'

export default function CreateStore(spec) {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(0);

  const store = Object.assign({
    emitChange() {
      emitter.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      emitter.removeListener(CHANGE_EVENT, callback);
    }
  }, spec);

  return store;
}

export function isContain(bag, id, fields) {
  let item = bag[id];
  if (!bag[id]) {
    return false;
  }

  if (fields) {
    return fields.every(field => item.hasOwnProperty(field));
  } else {
    return true;
  }
}

export function merge(bag, entities) {
  for (let id in entities) {
    if (!entities.hasOwnProperty(id)) {
      continue;
    }

    if (!bag.hasOwnProperty(id)) {
      bag[id] = entities[id];
    } else if (!shallowEqual(bag[id], entities[id])) {
      bag[id] = Object.assign({}, bag[id], entities[id]);
    }
  }
}

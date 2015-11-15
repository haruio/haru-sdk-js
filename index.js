function extend(target, source) {
  if (source) {
    for ( var key in source) {
      var val = source[key];
      if ( typeof val !== "undefined") {
        target[key] = val;
      }
    }
  }
  return target;
}
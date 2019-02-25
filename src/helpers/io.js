let state = false;

export default {
  foo: function () {
    state = true;
  },
  bar: function () {
    return state;
  }
}

1) this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
const object = Object.assign({}, 
  {count: count + 1}, 
  {count: count + 2}, 
  {count: count + 3}
);
1.1) callback
2) import React from 'react'
3) key={item.id}
4) this.super()
5) this.handleClick = this.handleClick.bind(this);
6) {(param) => doSomething(param)} vs (doSomething.bind(this, param)) vs {doSomething}
7) celsius vs fahrenheit

import { createStore } from 'redux'



let list=[(<div></div>)];
function changer(state = {title:list}, action) {
  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title }
    default:
      return state
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title
  }
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(changer)

export { mapStateToProps, mapDispatchToProps, store }

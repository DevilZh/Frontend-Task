/*
* abstract state handler method.
* @param Function {selector}
* */

const handler = (selector = action => action.payload) => (state, action) => ({
  ...state,
  [action.target]: selector(action, state)
})

/*
* helper function, make it simple to create reducer, Object literals instead of switch-case style
* */
const createReducer = (initialState, reducerObject) => (state = initialState, action) => {
  const reducerHandler = reducerObject[action.type]
  return typeof reducerHandler === 'function' ? reducerHandler(state, action) : state
}

export default {
  handler,
  createReducer
}

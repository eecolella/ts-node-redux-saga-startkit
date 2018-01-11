import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools }          from 'remote-redux-devtools'
import createSagaMiddleware, { SagaIterator, delay } from 'redux-saga'
import { call, put }                                 from 'redux-saga/effects'

/**
 *
 *
 *
 *
 * ~~~ reducer
 *
 */
const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

/**
 *
 *
 *
 *
 * ~~~ sagas
 *
 */
function* helloSaga() {
  console.log('Hello Sagas!')
}

function* anotherSaga(): SagaIterator {
  console.log('Hello Sagas 2!')
  yield put({type: 'INCREMENT'})
  yield call(delay, 3000)
  yield put({type: 'INCREMENT'})
  
}

function* someSaga() {
  yield call(helloSaga)
}

function* rootSaga() {
  yield call(someSaga)
  yield call(anotherSaga)
}

/**
 *
 *
 *
 *
 * ~~~ initial state
 *
 */
const initialState = 10

/**
 *
 *
 *
 *
 * ~~~ store
 *
 */
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const composeEnhancers = composeWithDevTools({realtime: true, port: 8000})
const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware),
))

sagaMiddleware.run(rootSaga)

/**
 *
 *
 *
 *
 * ~~~ dispatching actions
 *
 const incrementer = () => {
  setTimeout( ()=> {
    store.dispatch({type: 'INCREMENT'})
    incrementer()
  }, 1000)
}
 
 incrementer()
 
 store.subscribe(()=> {
  console.log(store.getState())
})
 */

export const sum =  (a, b) => {
  return a + b;
}

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { ApplicationState } from './redux/reducers'

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<ApplicationState, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export default store
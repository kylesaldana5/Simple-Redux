
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './js/reducers'
import App from "./containers/App"

const store = createStore(
reducer,
applyMiddleware(thunk, logger)
)

render(
<Provider store={store}>
   <App />
</Provider>,
document.getElementById('root')
)
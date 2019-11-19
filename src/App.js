import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import AppNavigator from './AppNavigator'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
export default App

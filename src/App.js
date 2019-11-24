import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { AsyncStorage, YellowBox } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import AppNavigator from './AppNavigator'

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

YellowBox.ignoreWarnings(['Warning: DatePickerIOS has been merged'])

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}
export default App

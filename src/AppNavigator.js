import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CreateScreen from './screens/CreateScreen'
import DoneScreen from './screens/DoneScreen'
import CustomDrawerContentComponent from './screens/DrawerComponent'

const AppNavigator = createDrawerNavigator(
  {
    CREATE_SCREEN: {
      screen: CreateScreen
    },
    DONE_SCREEN: {
      screen: DoneScreen
    }
  },
  {
    initialRouteName: 'CREATE_SCREEN',
    headerMode: 'none',
    contentComponent: CustomDrawerContentComponent
  }
)

export default createAppContainer(AppNavigator)

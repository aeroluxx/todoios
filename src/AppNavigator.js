import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CreateScreen from './screens/CreateScreen'
import DoneScreen from './screens/DoneScreen'
import ModalScreen from './screens/ModalScreen'
import CustomDrawerContentComponent from './screens/DrawerComponent'

const RootNavigator = createDrawerNavigator(
  {
    CREATE_SCREEN: {
      screen: CreateScreen,
      navigationOptions: () => ({
        title: 'Список дел',
        headerBackTitle: null
      })
    },
    DONE_SCREEN: {
      screen: DoneScreen,
      navigationOptions: () => ({
        title: 'Выполненные дела',
        headerBackTitle: null
      })
    }
  },
  {
    initialRouteName: 'CREATE_SCREEN',
    headerMode: 'none',
    contentComponent: CustomDrawerContentComponent
  }
)

const AppNavigator = createDrawerNavigator(
  {
    Main: {
      screen: RootNavigator
    },
    Modal: {
      screen: ModalScreen,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      })
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)

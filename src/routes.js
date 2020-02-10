import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './pages/Main'
import Intro from './pages/Intro'

const Routes = createAppContainer(
  createSwitchNavigator({
    Intro,
    Main,
  })
)

export default Routes
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";


navigator = createStackNavigator({
  Index: IndexScreen,
},{
  initialRouteName:"Index",
  defaultNavigationOptions:{
    title:"Blog CRUD"
  },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

//TAREFA 1
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarActiveTintColor="#0366d6"
      tabBarInactiveTintColor="#6a737d"
      tabBarStyle={{
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e1e4e8",
      }}
    ></Tab.Navigator>
  );
};

import React from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Likes from "./src/components/Likes";
import Todo from "./src/components/Todo";
import Flex from "./src/components/Flex";
import List from "./src/components/List";
import FlatlistExample from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";
const AppNavigator = createStackNavigator({
 Likes,
 Todo,
Touchables
});

AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

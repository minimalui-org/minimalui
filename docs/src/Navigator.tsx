import { useDimensions, useTheme } from "@minimalui/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import * as Components from "./components";

const RootStack = createDrawerNavigator();

const linking = { enabled: true, prefixes: ["https://google.com"] };

const Drawer: React.FunctionComponent<DrawerContentComponentProps> = (
  props
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export const Navigator: React.FunctionComponent = () => {
  const { type } = useDimensions();
  const [isReady, setIsReady] = useState(true);
  const [initialState, setInitialState] = useState();
  const theme = useTheme();

  useEffect(() => {
    const restoreState = async () => {
      try {
        // Only restore state if there's no deep link and we're not on web
        const savedStateString = await AsyncStorage.getItem("NAVIGATION_STATE");
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const navigationTheme = {
    dark: theme.palette.type === "dark",
    colors: {
      background: theme.palette.background.default,
      border: theme.palette.divider,
      card: "white" || theme.palette.background.paper,
      notification: theme.palette.secondary,
      primary: theme.palette.primary,
      text: theme.palette.text.primary,
    },
  };

  const permanentDrawer = type === "lg" || type === "xl";

  return (
    <NavigationContainer
      initialState={initialState}
      linking={linking}
      onStateChange={(state) =>
        AsyncStorage.setItem("NAVIGATION_STATE", JSON.stringify(state))
      }
      theme={navigationTheme}
    >
      <RootStack.Navigator
        drawerContent={(props) => <Drawer {...props} />}
        drawerType={permanentDrawer ? "permanent" : "slide"}
      >
        <RootStack.Screen
          component={Components.ButtonScreen}
          name="Get Started"
        />
        <RootStack.Screen component={Components.ButtonScreen} name="Theming" />
        <RootStack.Screen component={Components.AppBarScreen} name="AppBar" />
        <RootStack.Screen component={Components.AvatarScreen} name="Avatar" />
        <RootStack.Screen component={Components.ButtonScreen} name="Button" />
        <RootStack.Screen component={Components.CardScreen} name="Card" />
        <RootStack.Screen component={Components.LayoutScreen} name="Layout" />
        <RootStack.Screen component={Components.InputScreen} name="Input" />
        <RootStack.Screen component={Components.ModalScreen} name="Modal" />
        <RootStack.Screen
          component={Components.ResponsiveScreen}
          name="Responsive"
        />

        <RootStack.Screen
          component={Components.TypographyScreen}
          name="Typography"
        />
        <RootStack.Screen
          component={Components.UtilitiesScreen}
          name="Utilities"
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

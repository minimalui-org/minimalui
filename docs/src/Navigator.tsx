import { Container, Switch, useDimensions, useTheme } from "@minimalui/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import * as Screens from "./screens";

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

type NavigatorProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const Navigator: React.FunctionComponent<NavigatorProps> = ({
  darkMode,
  setDarkMode,
}) => {
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
    dark: darkMode,
    colors: {
      background: theme.palette.background.default,
      border: "transparent",
      card: theme.palette.background.paper,
      notification: theme.palette.secondary,
      primary: theme.palette.primary,
      text: theme.palette.text.primary,
    },
  };

  const isLargeScreen = type === "lg" || type === "xl";

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
        drawerStyle={{
          backgroundColor: theme.palette.background.default,
          borderRightColor: theme.palette.background.paper,
          borderRightWidth: 1,
          width: 240,
        }}
        drawerType={isLargeScreen ? "permanent" : "slide"}
        screenOptions={{
          headerRight: () => (
            <Container>
              <Switch
                onValueChange={() => setDarkMode(!darkMode)}
                value={darkMode}
              />
            </Container>
          ),
          headerShown: true,
        }}
      >
        <RootStack.Screen
          component={Screens.GetStartedScreen}
          name="Get Started"
        />
        <RootStack.Screen component={Screens.ButtonScreen} name="Theming" />
        <RootStack.Screen component={Screens.AppBarScreen} name="AppBar" />
        <RootStack.Screen component={Screens.AvatarScreen} name="Avatar" />
        <RootStack.Screen component={Screens.ButtonScreen} name="Button" />
        <RootStack.Screen component={Screens.CardScreen} name="Card" />
        <RootStack.Screen component={Screens.LayoutScreen} name="Layout" />
        <RootStack.Screen component={Screens.InputScreen} name="Input" />
        <RootStack.Screen component={Screens.ModalScreen} name="Modal" />
        <RootStack.Screen
          component={Screens.ResponsiveScreen}
          name="Responsive"
        />

        <RootStack.Screen
          component={Screens.TypographyScreen}
          name="Typography"
        />
        <RootStack.Screen
          component={Screens.UtilitiesScreen}
          name="Utilities"
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

import { Feather } from "@expo/vector-icons";
import {
  Button,
  Container,
  IconButton,
  Spacer,
  Switch,
  Title,
  useDimensions,
  useTheme,
} from "@minimalui/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import * as Screens from "./screens";

const RootStack = createDrawerNavigator();

const linking = { enabled: true, prefixes: ["https://google.com"] };

const Drawer: React.FunctionComponent<DrawerContentComponentProps> = (
  props
) => {
  const pages = [
    { title: "Get Started", file: "get_started" },
    { title: "Demo", file: "demo" },
    { title: "Theming", file: "theming" },
    { title: "Hooks", file: "hooks" },
    { title: "AppBar", file: "components/app_bar" },
    { title: "Avatar", file: "components/avatar" },
    { title: "Button", file: "components/button" },
    { title: "Card", file: "components/card" },
    { title: "Fab", file: "components/fab" },
    { title: "IconButton", file: "components/icon_button" },
    { title: "Input", file: "components/input" },
    { title: "Layout", file: "components/layout" },
    { title: "Modal", file: "components/modal" },
    { title: "ResponsiveList", file: "components/responsive_list" },
    { title: "Switch", file: "components/switch" },
    { title: "Text", file: "components/text" },
  ];

  return (
    <DrawerContentScrollView {...props}>
      {pages.map((p) => (
        <Button
          key={p.file}
          onPress={() => props.navigation.navigate("Page", p)}
          style={{ alignItems: "flex-start", backgroundColor: "transparent" }}
        >
          {p.title}
        </Button>
      ))}
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
          header: ({
            scene: {
              descriptor: {
                navigation,
                options: { title },
              },
              route: { name },
            },
          }) => (
            <Container style={{ flexDirection: "row", alignItems: "center" }}>
              {!isLargeScreen && (
                <IconButton onPress={(navigation as any).toggleDrawer}>
                  <Feather name="menu" />
                </IconButton>
              )}
              <Spacer />
              <Title style={{ flex: 1 }}>{/* title || name */}</Title>
              <Feather
                color={theme.palette.text.primary}
                name="sun"
                size={18}
              />
              <Spacer />
              <Switch
                onValueChange={() => setDarkMode(!darkMode)}
                value={darkMode}
              />
              <Spacer />
              <Feather
                color={theme.palette.text.primary}
                name="moon"
                size={18}
              />
            </Container>
          ),
          headerShown: true,
        }}
      >
        <RootStack.Screen component={Screens.PageScreen} name="Page" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

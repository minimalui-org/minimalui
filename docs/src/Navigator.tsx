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
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { capitalCase } from "change-case";
import React, { useEffect, useState } from "react";

import * as Screens from "./screens";

const RootStack = createDrawerNavigator();

const linking: LinkingOptions = {
  enabled: true,
  prefixes: ["https://minimalui-org.github.io/"],
  config: {
    screens: {
      Page: "minimalui/:path?",
    },
  },
};

const Drawer: React.FunctionComponent<DrawerContentComponentProps> = (
  props
) => {
  return (
    <DrawerContentScrollView {...props}>
      {Screens.pages.map((p) => (
        <Button
          key={p.path}
          onPress={() => props.navigation.navigate("Page", { path: p.path })}
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
              route: { name, params },
            },
          }) => (
            <Container style={{ flexDirection: "row", alignItems: "center" }}>
              {!isLargeScreen && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <IconButton onPress={(navigation as any).toggleDrawer}>
                  <Feather name="menu" />
                </IconButton>
              )}
              <Spacer />
              <Title style={{ flex: 1 }}>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ((params as any)?.path &&
                    capitalCase((params as any)?.path)) ||
                    title ||
                    name
                }
              </Title>
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

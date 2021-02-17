import * as React from "react";
import {
  Dimensions,
  Modal as LegacyModal,
  ModalProps as LegacyModalProps,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

import Portal from "./Portal/Portal";
import useTheme from "./useTheme";

export type ModalProps = LegacyModalProps & {
  onClose: () => void;
  variant?: "default" | "bottomSheet";
};

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  onClose,
  variant = "default",
  visible,
  style,
  ...props
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (visible) {
      setOpen(true);
    } else {
      setTimeout(() => setOpen(false), 300);
    }
  }, [visible]);

  const theme = useTheme();

  /**
   * React Native for Web polyfill
   */
  const modalStyle: StyleProp<ViewStyle> = [
    Platform.OS === "web" && {
      backgroundColor: "red",
      // borderWidth: 0,
      // bottom: 0,
      // display: open ? undefined : "none",
      // flex: 1,
      // left: 0,
      // position: "absolute",
      // right: 0,
      // top: 0,
    },
  ];

  const overlayStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: "rgba(0,0,0,0.7)",
      flex: 1,
      justifyContent: variant === "bottomSheet" ? "flex-end" : "center",
      zIndex: 100,
    },
  ];

  const contentStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(2),
      maxHeight: Dimensions.get("screen").height * 0.8,
      overflow: "hidden",
      paddingBottom: variant === "bottomSheet" ? 50 : 0,
      position: "relative",
      top: variant === "bottomSheet" ? 50 : 0,
    },
    style,
  ];

  const translateY = Dimensions.get("screen").height / 1.5;

  const slideInUp = {
    from: {
      translateY,
    },
    to: {
      translateY: 0,
    },
  };

  const slideOutDown = {
    from: {
      translateY: 0,
    },
    to: {
      translateY,
    },
  };

  return (
    <Portal>
      <LegacyModal
        animationType="fade"
        style={modalStyle}
        transparent
        visible={open}
        {...props}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={overlayStyle}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={contentStyle}>{children}</View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </LegacyModal>
    </Portal>
  );
};

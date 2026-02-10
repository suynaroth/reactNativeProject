import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";

type Props = {
  onPress?: () => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  iconColor?: string;
};

const BackBotton = ({
  onPress,
  disabled = false,
  style,
  labelStyle,
  iconColor = "#1d1d1f",
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      android_ripple={{ color: "rgba(0,0,0,0.08)", borderless: true }}
      style={({ pressed }) => [
        styles.container,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
        style,
      ]}
      hitSlop={12}
    >
      <View>
        <Ionicons name="chevron-back" size={s(18)} color={iconColor} />
      </View>
    </Pressable>
  );
};

export default BackBotton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: s(8),
    paddingVertical: vs(6),
    paddingRight: s(10),
    paddingLeft: s(6),
    borderRadius: s(18),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrap: {
    width: s(28),
    height: s(28),
    borderRadius: s(14),
    backgroundColor: "#f2f4f7",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: s(14),
    fontWeight: "600",
    color: "#1d1d1f",
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BackBotton from "../components/backBotton";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function ResetPW({ navigation }: Props) {
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (!email) {
      Alert.alert("Oops!", "Please enter your email.");
      return;
    }
    navigation.navigate("Verify", { email });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <BackBotton style={{marginTop:20}} onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          
          <Text style={styles.title}>🔑 Reset Password</Text>
          <Text style={styles.subtitle}>Recover your account password</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#888"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#f2f4f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: "center",
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#007AFF",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  link: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 8,
    fontSize: 15,
  },
  signUpwith: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    marginBottom: 10,
  },

  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    padding: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

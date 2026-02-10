import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BackBotton from "../components/backBotton";

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: { params?: { email?: string } };
};

export default function VerifyScreen({ navigation, route }: Props) {
  const [code, setCode] = useState("");
  const email = route?.params?.email;

  const handleVerify = () => {
    if (!code) {
      Alert.alert("Oops!", "Please enter the verification code.");
      return;
    }
    navigation.navigate("NewPW", { email });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <BackBotton style={{ marginTop: 20 }} onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text style={styles.title}>✅ Verify Code</Text>
          <Text style={styles.subtitle}>
            Enter the code we sent{email ? ` to ${email}` : " to your email"}.
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Verification code"
              placeholderTextColor="#aaa"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.link}>Resend Code</Text>
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
});

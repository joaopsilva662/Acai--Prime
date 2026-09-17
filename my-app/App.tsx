import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        {/* Header */}
        <Header />
        {/* Header */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9FC"
  }
})
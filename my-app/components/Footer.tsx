import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Açaí Prime • JP | TDS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#6C757D'
  }
})
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>Açaí Prime</Text>
        <Text style={styles.headerSubtitle}>O sabor da Amazônia</Text>
      </View>

      <View>
        <Image
          source={require('../assets/Rectangle.png')}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2C1B30'
  },
  headerSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#644D6A'
  }
})
import { AntDesign } from "@expo/vector-icons";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AcaiCardProps = {
  image: ImageSourcePropType;
  name: string;
  description: string;
  price: string;
};

export default function AcaiCard({
  image,
  name,
  description,
  price
}: AcaiCardProps) {
  return (
    <View style={styles.productCard}>
      <Image
        source={image}
        style={styles.productImage}
      ></Image>
      <Text style={styles.productTitle}>{name}</Text>
      <Text style={styles.productDescription}>{description}</Text>
      <View style={styles.framePrice}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.frameButton}>
          <AntDesign name="plus" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C1B30',
    marginBottom: 4
  },
  productDescription: {
    fontSize: 11,
    fontWeight: '400',
    color: '#644D6A'
  },
  framePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#7B1FA2'
  },
  frameButton: {
    borderRadius: 14,
    padding: 7,
    backgroundColor: '#7B1FA2'
  }
})
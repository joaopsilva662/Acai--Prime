import { useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "./components/Header";
import AcaiCard from "./components/Menu";
import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage('Por favor, informe seu nome!')
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido`);
    };
  }

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

        {/* Body */}
        <View style={styles.content}>

          {/* Title */}
          <View style={styles.contentInitial}>
            <Text style={styles.contentTitle}>Refresque seu dia!</Text>
            <Text style={styles.contentSubtitle}>Escolha seu Açaí favorito de hoje</Text>
          </View>
          {/* Title */}

          {/* Card */}
          <View style={styles.featuredCard}>
            <Image
              source={require('./assets/featured-image.png')}
              style={styles.image}
            ></Image>

            <View style={styles.framePedido}>
              <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
              <View style={styles.frameMaisPedido}>
                <Text style={styles.featuredMaisPedido}>MAIS PEDIDO</Text>
              </View>
            </View>

            <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>

            <View style={styles.framePrice}>

              <Text style={styles.featuredPrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.buttonAdicionar}>
                <Feather name="shopping-bag" size={14} color="white" />
                <Text style={styles.featuredAdicionar}>Adicionar</Text>
              </TouchableOpacity>

            </View>
          </View>
          {/* Card */}

          <Text style={styles.titleGrid}>Nossos Copos & Tigelas</Text>

          {/* Grid */}
          <View style={styles.sectionGrid}>
            <AcaiCard
              image={require('./assets/product-image.png')}
              name="Açaí Tradicional"
              description="Açaí cremoso com banana e granola tradicional"
              price="R$ 14,00"
            />

            <AcaiCard
              image={require('./assets/product-image (1).png')}
              name="Copo Tropical"
              description="Camadas de açaí, morango, kiwi e leite em pó"
              price="R$ 18,50"
            />

            <AcaiCard
              image={require('./assets/product-image (2).png')}
              name="Vitamina de Açaí"
              description="Bebida energética batida com guaraná e aveia"
              price="R$ 12,00"
            />

            <AcaiCard
              image={require('./assets/product-image (3).png')}
              name="Açaí Fit Zero"
              description="Zero adição de açúcar, com chia e castanhas"
              price="R$ 16,90"
            />
          </View>
          {/* Grid */}

          <View style={styles.orderFormContainer}>
            <Text style={styles.orderTitle}>Qual é o seu nome?</Text>

            <View style={styles.nameInput}>
              <Feather name="user" size={16} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              ></TextInput>
            </View>

            <CustomButton
              title="Fazer meu pedido"
              onPress={handleOrder}
            />

              {message !== '' && (
                <View style={styles.message}>
                  <FontAwesome5 name="check-circle" size={16} color="green" />
                  <Text style={styles.messageText}>{message}</Text>
                </View>
              )}

            </View>
            
            <Footer />

          </View>
          {/* Body */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9FC"
  },
  content: {
    paddingHorizontal: 24
  },
  //Title
  contentInitial: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C1B30'
  },
  contentSubtitle: {
    fontSize: 15,
    color: '#644D6A',
  },
  //Title

  //Card
  featuredCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginBottom: 16
  },
  framePedido: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  frameMaisPedido: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#F3E5F5'
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2C1B30'
  },
  featuredMaisPedido: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7B1FA2'
  },
  featuredDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#644D6A'
  },
  framePrice: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: '#7B1FA2'
  },
  buttonAdicionar: {
    backgroundColor: '#7B1FA2',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  featuredAdicionar: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  //Card

  titleGrid: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2C1B30'
  },
  //Grid
  sectionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  //Grid

  //Order
  orderFormContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 24,
    padding: 16,
    marginVertical: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2C1B30'
  },
  nameInput: {
    backgroundColor: '#F1EDF4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginVertical: 16
  },
  input: {
    fontSize: 14,
    fontWeight: '400',
    color: '#644D6A'
  },
  message: {
    backgroundColor: '#E8F5E9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
    marginTop: 16,
    padding: 8
  },
  messageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E7D32',
    paddingLeft: 8
  },
  //Order
})
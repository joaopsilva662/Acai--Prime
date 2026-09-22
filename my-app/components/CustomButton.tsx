import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({
  title,
  onPress
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#7B1FA2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderRadius: 24,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF'
  }
})
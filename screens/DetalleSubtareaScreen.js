// screens/DetalleSubtareaScreen.js
import { StyleSheet, Text, View } from 'react-native';

export default function DetalleSubtareaScreen({ route }) {
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text>Descripción: {subtarea.descripcion}</Text>
      <Text>Estado: {subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

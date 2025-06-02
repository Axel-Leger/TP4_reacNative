// screens/TareasScreen.js
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../constants/tareas';

export default function TareasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Subtareas', { tareaId: item.id })}
          >
            <Text style={styles.title}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, backgroundColor: '#eee', marginBottom: 10, borderRadius: 8 },
  title: { fontSize: 18 },
});

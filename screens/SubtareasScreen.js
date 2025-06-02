// screens/SubtareasScreen.js
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../constants/tareas';

export default function SubtareasScreen({ route, navigation }) {
  const { tareaId } = route.params;
  const tarea = tareas.find(t => t.id === tareaId);

  return (
    <View style={styles.container}>
      <FlatList
        data={tarea?.subtareas || []}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('DetalleSubtarea', { subtarea: item })}
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

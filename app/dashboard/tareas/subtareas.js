import { useRouter, useSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tareasData from "../../../constants/tareas.js";


export default function ListaSubtareas() {
  const { tareaId } = useSearchParams();
  const router = useRouter();

  const tarea = tareasData.find((t) => t.id.toString() === tareaId);
  if (!tarea) return <Text>Tarea no encontrada</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>{tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push(`/dashboard/tareas/detalle?subtareaId=${item.id}&tareaId=${tareaId}`)
            }
            style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Text>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

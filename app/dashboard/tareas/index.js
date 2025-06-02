import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tareasData from "../../../constants/tareas.js";

export default function ListaTareas() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tareasData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/dashboard/tareas/subtareas?tareaId=${item.id}`)}
            style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

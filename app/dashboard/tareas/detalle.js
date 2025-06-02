import { useSearchParams } from "expo-router";
import { Text, View } from "react-native";
import tareasData from "../../../constants/tareas.js";

export default function DetalleSubtarea() {
  const { tareaId, subtareaId } = useSearchParams();

  const tarea = tareasData.find((t) => t.id.toString() === tareaId);
  if (!tarea) return <Text>Tarea no encontrada</Text>;

  const subtarea = tarea.subtareas.find((s) => s.id.toString() === subtareaId);
  if (!subtarea) return <Text>Subtarea no encontrada</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{subtarea.titulo}</Text>
      <Text style={{ marginTop: 10 }}>{subtarea.descripcion}</Text>
      <Text style={{ marginTop: 10, fontStyle: "italic" }}>
        Estado: {subtarea.estado}
      </Text>
    </View>
  );
}

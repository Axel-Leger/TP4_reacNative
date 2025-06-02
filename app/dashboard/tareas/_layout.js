import { Stack } from "expo-router";

export default function TareasLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tareas" }} />
      <Stack.Screen name="subtareas" options={{ title: "Subtareas" }} />
      <Stack.Screen name="detalle" options={{ title: "Detalle" }} />
    </Stack>
  );
}

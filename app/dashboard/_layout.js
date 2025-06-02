import { Tabs } from "expo-router";
export default function DashboardLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="inicio" options={{ title: "Inicio" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
      <Tabs.Screen name="tareas" options={{ title: "Tareas" }} />
    
    </Tabs>
  );
}

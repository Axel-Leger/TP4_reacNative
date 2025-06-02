import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetalleSubtareaScreen from '../screens/DetalleSubtareaScreen';
import SubtareasScreen from '../screens/SubtareasScreen';
import TareasScreen from '../screens/TareasScreen';

const Stack = createNativeStackNavigator();

export default function TareasStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={TareasScreen} />
      <Stack.Screen name="Subtareas" component={SubtareasScreen} />
      <Stack.Screen name="DetalleSubtarea" component={DetalleSubtareaScreen} options={{ title: 'Detalle Subtarea' }} />
    </Stack.Navigator>
  );
}

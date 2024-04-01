import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Dashboard from './src/screens/Dashboard';
import Transactions from './src/screens/Transactions';


const Tab = createBottomTabNavigator();

export default function App() {
	// const isDarkMode = useColorScheme() === 'dark';

	return <Tab.Navigator initialRouteName='Dashboard'>
		<Tab.Screen name="Dashboard" component={Dashboard} />
		<Tab.Screen name="Settings" component={Transactions} />
	</Tab.Navigator>
}

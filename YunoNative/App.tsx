import 'react-native-gesture-handler';

import TabNavigator from './src/components/TabNavigator';
import Dashboard from './src/screens/Dashboard';
import Transactions from './src/screens/Transactions';

export default function App() {
	return <TabNavigator initialRouteName='Dashboard' components={[
		{ name: 'Dashboard', component: Dashboard },
		{ name: 'Transactions', component: Transactions }
	]} />
}

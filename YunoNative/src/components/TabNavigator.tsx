import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultRouterOptions } from "@react-navigation/core";

interface ITabNavProps extends DefaultRouterOptions {
	components: {
		name: string;
		component: () => JSX.Element;
	}[];
}

export default function TabNavigator({ initialRouteName, components }: ITabNavProps) {
	const Tab = createBottomTabNavigator();
	return <>
		{components.length > 0 && < Tab.Navigator initialRouteName={initialRouteName}>
			{components.map(component => <Tab.Screen name={component.name} component={component.component} />)}
		</Tab.Navigator >}
	</>

}
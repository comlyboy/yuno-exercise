import { createContext, useContext, useState } from "react";
import { AlertTypeEnum, IAlert, IApplicationContext } from "../types";

const AppContext = createContext<IApplicationContext>({
	alert: {
		sendAlert: () => { },
		sendErrorAlert: () => { },
		removeAlert: () => { },
		alert: null,
	},
});

export default function ApplicationContext({ children }: { children: JSX.Element }) {
	const [alert, setAlert] = useState<IAlert | null>(null);

	function helpSetAlerts(alert: IAlert): void {
		alert.type = alert.type || AlertTypeEnum.SUCCESS;
		setAlert(alert);
	}

	const contextValues: IApplicationContext = {
		alert: {
			alert,
			sendAlert: (message, type) => {
				helpSetAlerts({ message, type });
			},
			sendErrorAlert: (error) => {
				const message = error.message || 'An error occured!';
				helpSetAlerts({ message, type: AlertTypeEnum.ERROR });
			},
			removeAlert: () => setAlert(null),
		}
	};

	return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
}

export function useAlert() {
	return useContext(AppContext).alert;
}

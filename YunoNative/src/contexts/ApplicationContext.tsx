import { createContext } from "react";

// for auth guard
// https://github.com/ivandotv/nextjs-client-signin-logic
// https://github.com/pagecow/nextjs-13-context-
// https://github.dev/sericaia/react-global-notifications-example
const Context = createContext<{
	// alert: {
	// 	sendAlert: (message: string, type?: any) => void;
	// 	sendErrorAlert: (error: Pick<any, "message">) => void;
	// 	removeAlert: (alertId: string) => void;
	// 	clearAlerts: () => void;
	// 	alerts: any[];
	// };
	// notification: {
	// 	notifications: any[];
	// };
	// userAuthentication: any & { isAuthenticated: boolean } | null;
}>({
	// alert: {
	// 	sendAlert: () => { },
	// 	sendErrorAlert: () => { },
	// 	removeAlert: () => { },
	// 	clearAlerts: () => { },
	// 	alerts: [],
	// },
	// notification: {
	// 	notifications: [],
	// },
	// userAuthentication: null,
});

export default function ApplicationContext({ children }: any) {
	// const [isAuthenticated, setIsAuthenticated] = useState(false);
	// const [showVerifyModal, setShowVerifyModal] = useState(false);
	// const [isVerified, setIsVerified] = useState(true);
	// const [notification, setNotification] = useState<{
	// 	isOpened: boolean;
	// 	type?: "network" | "verification";
	// }>({ isOpened: false });


	// useEffect(() => {
	// 	helpSetAuth();
	// }, [authState]);

	// function helpSetAlerts(data: IAlert): void {
	// 	setAlerts((currentAlerts) => {
	// 		data.type = data.type || AlertTypeEnum.SUCCESS;
	// 		data = { id: generateNanoId(10), ...data };
	// 		// https://youtu.be/oc_TNtCe2sY?t=1077
	// 		return [data, ...currentAlerts];
	// 	});
	// }

	// function helpSetAuth() {
	// 	const authStore = getAuthData();
	// 	if (!authState && !authStore) {
	// 		setIsAuthenticated(false);
	// 		return;
	// 	}
	// 	if (authState?.user && !authState?.user?.isVerified) {
	// 		// set notification
	// 		helpSetNotification(true);
	// 		setIsVerified(false);
	// 	}
	// 	if (authState?.user && authState?.user?.isVerified) {
	// 		// set notification
	// 		helpSetNotification(false);
	// 		setIsVerified(true);
	// 	}

	// 	if (!authState && authStore) {
	// 		// set the state into redux store
	// 		dispatch(persistAuthentication(authStore));
	// 		setIsAuthenticated(true);
	// 		return;
	// 	}
	// 	if (authState && !authStore) {
	// 		// set the state into local storage
	// 		saveAuthData({ ...authState });
	// 		setIsAuthenticated(true);
	// 		return;
	// 	}
	// 	setIsAuthenticated(true);
	// }

	// function helpSetNotification(
	// 	isOpened: boolean,
	// 	type?: "network" | "verification"
	// ): void {
	// 	setNotification({ isOpened, type });
	// }

	const contextValues = {
		// notification: {
		// 	notifications:[],
		// },

		// userAuthentication: { isAuthenticated },

	};

	return <Context.Provider value={contextValues}>{children}</Context.Provider>;
}
// For route protection
// https://stackoverflow.com/questions/63251020/react-nextjs-protected-routes

// export function useUserIsAuthenticated(): boolean {
// 	return useContext(Context).userAuthentication?.isAuthenticated || false;
// }
// export function useAuthenticatedUser() {
// 	return useContext(Context).userAuthentication?.user;
// }
// export function useUserAuthentication() {
// 	return useContext(Context).userAuthentication;
// }
// export function useNotification() {
// 	return useContext(Context).notification;
// }
// export function useNotification() {
// 	return useContext(Context).notification;
// }
// export function useVerification() {
// 	return useContext(Context).verification;
// }

// export function usePaymentType() {
// 	return useContext(Context).paymentType;
// }
// export function useAuthenticatedAdminIsPermited({
// 	requiredPermissions,
// 	matchAll = false,
// }: {
// 	requiredPermissions: string[];
// 	matchAll?: boolean;
// }): { isAuthenticated: boolean; isPermitted: boolean } {
// 	let isPermitted = false;
// 	const authentication = useContext(Context).userAuthentication;
// 	if (
// 		!authentication ||
// 		!authentication?.user ||
// 		!authentication?.isAuthenticated
// 	) {
// 		return { isAuthenticated: false, isPermitted };
// 	}
// 	const permissions = authentication.user.permissions;

// 	if (
// 		!permissions.length ||
// 		authentication.user.userType !== UserTypeEnum.ADMIN
// 	) {
// 		return { isAuthenticated: true, isPermitted };
// 	}
// 	if (matchAll) {
// 		isPermitted = requiredPermissions.every((item) =>
// 			permissions.includes(item)
// 		);
// 		return { isAuthenticated: true, isPermitted };
// 	}
// 	isPermitted = requiredPermissions.some((item) => permissions.includes(item));
// 	return { isAuthenticated: true, isPermitted };
// }

// export function useAuthenticatedAdminPermissions(): string[] {
// 	const authentication = useContext(Context).userAuthentication;
// 	if (
// 		!authentication ||
// 		!authentication?.user ||
// 		!authentication?.isAuthenticated
// 	) {
// 		return [];
// 	}
// 	if (authentication.user.userType !== UserTypeEnum.ADMIN) {
// 		return [];
// 	}
// 	return authentication.user.permissions;
// }

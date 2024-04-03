import { useContext } from "react";
import { AppContext } from "../contexts";

export function useAlert() {
	return useContext(AppContext).alert;
}

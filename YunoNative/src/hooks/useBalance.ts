import { useContext } from "react";
import { AppContext } from "../contexts";

export function useBalance() {
	return useContext(AppContext).balance;
}
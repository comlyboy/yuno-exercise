import { useContext } from "react";
import { AppContext } from "../contexts";

export function useTransaction() {
	return useContext(AppContext).transaction;
}
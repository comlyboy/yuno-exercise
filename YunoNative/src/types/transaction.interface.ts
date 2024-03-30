import { IBaseId } from "./base.interface";

export interface ITransaction extends IBaseId {
	date: string;
	amount: number;
	description: string;
}
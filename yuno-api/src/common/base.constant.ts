import { ITransaction } from "src/core/transaction/entities/transaction.interface";

export enum ResponseMessageEnum {
	INTERNAL_SERVER_ERROR = 'Error occured in the server!'
}


export const transactionList: ITransaction[] = [
	{
		id: '1611709645221',
		amount: 86756,
		date: '2024-03-29T10:53:09.141Z',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab! Pariatur quo, alias deserunt dolorem tempora corporis porro adipisci fuga suscipit eum dolores ad tenetur soluta culpa dolore voluptas inventore!'
	},
	{
		id: '1311709589141',
		date: '2024-03-29T10:55:04.184Z',
		amount: 4300,
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab! Pariatur quo, alias deserunt dolorem tempora corporis porro adipisci fuga suscipit eum dolores ad tenetur soluta culpa dolore voluptas inventore!'
	},
	{
		id: '1851705839295',
		date: '2024-03-29T10:55:56.285Z',
		amount: 5493,
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab! Pariatur quo, alias deserunt dolorem tempora corporis porro adipisci fuga suscipit eum dolores ad tenetur soluta culpa dolore voluptas inventore!'
	},
	{
		id: '2011705839295',
		date: '2024-03-29T10:55:56.285Z',
		amount: 80000,
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab! Pariatur quo, alias deserunt dolorem tempora corporis porro adipisci fuga suscipit eum dolores ad tenetur soluta culpa dolore voluptas inventore!'
	},
	{
		id: '2301705839295',
		date: '2024-03-29T10:55:56.285Z',
		amount: 48753,
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab! Pariatur quo, alias deserunt dolorem tempora corporis porro adipisci fuga suscipit eum dolores ad tenetur soluta culpa dolore voluptas inventore!'
	},
];
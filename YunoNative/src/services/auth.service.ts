import { httpService } from "../http";
import { IUser } from "../types";

export async function login(loginUserDto: any): Promise<IUser> {
	return await httpService.send<IUser>({
		url: '/',
		method: 'POST',
		data: loginUserDto
	});
}

export async function register(registerUserDto: any) {
	return await httpService.send<IUser>({
		url: '/',
		method: 'POST',
		data: registerUserDto
	});
}

export function persistAuthentication() {

}
